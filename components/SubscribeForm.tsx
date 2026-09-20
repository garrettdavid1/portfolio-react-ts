'use client';

import { useId, useState } from 'react';
import { briefing } from '@/content/site';

type State = { kind: 'idle' | 'busy' | 'done' | 'error'; message?: string };

export default function SubscribeForm() {
	const [email, setEmail] = useState('');
	const [state, setState] = useState<State>({ kind: 'idle' });
	const id = useId();

	async function submit(e: React.FormEvent) {
		e.preventDefault();
		setState({ kind: 'busy' });
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email }),
			});
			const data = (await res.json()) as { message?: string };
			if (!res.ok) throw new Error(data.message ?? 'That did not go through.');
			setState({
				kind: 'done',
				message: data.message ?? 'Sent. Check your inbox.',
			});
			setEmail('');
		} catch (err) {
			setState({
				kind: 'error',
				message: err instanceof Error ? err.message : 'That did not go through.',
			});
		}
	}

	return (
		<form className="briefing__form" onSubmit={submit}>
			<label className="mono" htmlFor={id}>
				Email
			</label>
			<input
				id={id}
				type="email"
				required
				autoComplete="email"
				value={email}
				placeholder="you@company.com"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button className="btn" type="submit" disabled={state.kind === 'busy'}>
				{state.kind === 'busy' ? 'Sending…' : briefing.cta}
			</button>
			<p className="briefing__fine" aria-live="polite">
				{state.message ?? briefing.fineprint}
			</p>
		</form>
	);
}
