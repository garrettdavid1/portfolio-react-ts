import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * "What are you trying to ship?" — the one form on the homepage.
 *
 * With RESEND_API_KEY and CONTACT_TO set, this emails David. Without them it
 * refuses honestly rather than swallowing the message, because a contact form
 * that silently drops mail is worse than no contact form.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
	let payload: unknown;
	try {
		payload = await request.json();
	} catch {
		return NextResponse.json({ message: 'Bad request.' }, { status: 400 });
	}

	const { email, note } = (payload ?? {}) as { email?: unknown; note?: unknown };

	if (typeof email !== 'string' || !EMAIL.test(email) || email.length > 254) {
		return NextResponse.json(
			{ message: 'That does not look like an email address.' },
			{ status: 400 },
		);
	}
	if (typeof note !== 'string' || note.trim().length < 2) {
		return NextResponse.json({ message: 'Add a sentence.' }, { status: 400 });
	}

	const key = process.env.RESEND_API_KEY;
	const to = process.env.CONTACT_TO;
	const from = process.env.CONTACT_FROM;
	if (!key || !to || !from) {
		return NextResponse.json(
			{ message: 'The form is not wired up yet. Reach me on LinkedIn for now.' },
			{ status: 503 },
		);
	}

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${key}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from,
			// CONTACT_TO may list several addresses, comma-separated.
			to: to.split(',').map((t) => t.trim()).filter(Boolean),
			reply_to: email,
			subject: `davidgarrett.us — ${email}`,
			text: note.slice(0, 1200),
		}),
	});

	if (!res.ok) {
		return NextResponse.json(
			{ message: 'That did not go through. Try again in a minute.' },
			{ status: 502 },
		);
	}

	return NextResponse.json({ message: 'Sent. I will reply myself.' });
}
