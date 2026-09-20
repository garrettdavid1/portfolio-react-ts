import { NextResponse } from 'next/server';
import { findAnswer, matchQuestion, type Answer } from '@/content/answers';

export const runtime = 'nodejs';

/**
 * The swap point.
 *
 * Right now this resolves against a hand-written index, so the panel is a
 * curated lookup, not a model. Making it live means replacing the body of
 * `answerFor()` with a model call over an allow-listed slice of the control
 * plane, and keeping three things that are already here: a per-IP rate limit,
 * a hard cap on answer length, and a refusal path that returns the "no
 * matching record" answer instead of inventing one.
 *
 * Nothing under vault/, and nothing about the businesses, is ever in scope.
 */
function answerFor(input: { id?: string; text?: string }): Answer {
	if (input.id) {
		const hit = findAnswer(input.id);
		if (hit) return hit;
	}
	if (input.text) return matchQuestion(input.text);
	return matchQuestion('');
}

// Crude in-memory limiter. Fine for one serverless instance and a static page;
// swap for a shared store if the live version ever costs real money per call.
const hits = new Map<string, { n: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;

function rateLimited(key: string): boolean {
	const now = Date.now();
	const row = hits.get(key);
	if (!row || now > row.resetAt) {
		hits.set(key, { n: 1, resetAt: now + WINDOW_MS });
		return false;
	}
	row.n += 1;
	return row.n > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
	const ip =
		request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
	if (rateLimited(ip)) {
		return NextResponse.json(
			{ message: 'Too many questions in one minute.' },
			{ status: 429 },
		);
	}

	let payload: unknown;
	try {
		payload = await request.json();
	} catch {
		return NextResponse.json({ message: 'Bad request.' }, { status: 400 });
	}

	const { id, text } = (payload ?? {}) as { id?: unknown; text?: unknown };
	const cleanId = typeof id === 'string' ? id.slice(0, 40) : undefined;
	const cleanText = typeof text === 'string' ? text.slice(0, 200) : undefined;

	if (!cleanId && !cleanText) {
		return NextResponse.json({ message: 'Ask something.' }, { status: 400 });
	}

	const answer = answerFor({ id: cleanId, text: cleanText });
	return NextResponse.json(
		{ ...answer, question: answer.question || cleanText || '' },
		{ headers: { 'Cache-Control': 'no-store' } },
	);
}
