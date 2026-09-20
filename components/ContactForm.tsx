'use client';

import { useId, useState } from 'react';
import { contact } from '@/content/site';

type State = { kind: 'idle' | 'busy' | 'done' | 'error'; message?: string };

export default function ContactForm() {
	const [email, setEmail] = useState('');
	const [note, setNote] = useState('');
	const [state, setState] = useState<State>({ kind: 'idle' });
	const emailId = useId();
	const noteId = useId();

	async function submit(e: React.FormEvent) {
		e.preventDefault();
		setState({ kind: 'busy' });
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, note }),
			});
			const data = (await res.json()) as { message?: string };
			if (!res.ok) throw new Error(data.message ?? 'That did not go through.');
			setState({ kind: 'done', message: data.message ?? 'Sent. I will reply.' });
			setEmail('');
			setNote('');
		} catch (err) {
			setState({
				kind: 'error',
				message: err instanceof Error ? err.message : 'That did not go through.',
			});
		}
	}

	return (
		<form className="briefing__form" onSubmit={submit}>
			<label className="mono" htmlFor={emailId}>
				Your email
			</label>
			<input
				id={emailId}
				type="email"
				required
				autoComplete="email"
				value={email}
				placeholder="you@company.com"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label className="mono" htmlFor={noteId}>
				What is on your mind
			</label>
			<textarea
				id={noteId}
				required
				rows={3}
				maxLength={1200}
				value={note}
				placeholder="A sentence is plenty."
				onChange={(e) => setNote(e.target.value)}
			/>
			<button className="btn" type="submit" disabled={state.kind === 'busy'}>
				{state.kind === 'busy' ? 'Sending…' : contact.cta}
			</button>
			<p className="briefing__fine" aria-live="polite">
				{state.message ?? contact.fineprint}
			</p>
		</form>
	);
}
