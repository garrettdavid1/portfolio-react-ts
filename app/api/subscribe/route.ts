import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * Signup for the morning briefing agent.
 *
 * With RESEND_API_KEY and RESEND_AUDIENCE_ID set, this adds the address to the
 * audience. Without them it refuses honestly rather than pretending to have
 * stored anything — a silent success here would be exactly the failure David
 * writes about.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
	let payload: unknown;
	try {
		payload = await request.json();
	} catch {
		return NextResponse.json({ message: 'Bad request.' }, { status: 400 });
	}

	const { email } = (payload ?? {}) as { email?: unknown };
	if (typeof email !== 'string' || !EMAIL.test(email) || email.length > 254) {
		return NextResponse.json(
			{ message: 'That does not look like an email address.' },
			{ status: 400 },
		);
	}

	const key = process.env.RESEND_API_KEY;
	const audience = process.env.RESEND_AUDIENCE_ID;
	if (!key || !audience) {
		return NextResponse.json(
			{ message: 'Signup is not wired up yet. Email me directly for now.' },
			{ status: 503 },
		);
	}

	const res = await fetch(
		`https://api.resend.com/audiences/${audience}/contacts`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${key}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, unsubscribed: false }),
		},
	);

	if (!res.ok) {
		return NextResponse.json(
			{ message: 'That did not go through. Try again in a minute.' },
			{ status: 502 },
		);
	}

	return NextResponse.json({ message: 'Sent. Check your inbox.' });
}
