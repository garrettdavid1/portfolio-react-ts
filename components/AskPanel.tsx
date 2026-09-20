'use client';

import { useId, useState } from 'react';
import type { Answer } from '@/content/answers';

type Props = {
	questions: Array<{ id: string; question: string }>;
	initial: Answer;
};

export default function AskPanel({ questions, initial }: Props) {
	const [answer, setAnswer] = useState<Answer>(initial);
	const [selected, setSelected] = useState<string>(initial.id);
	const [typed, setTyped] = useState('');
	const [busy, setBusy] = useState(false);
	const inputId = useId();

	async function ask(payload: { id?: string; text?: string }) {
		setBusy(true);
		try {
			const res = await fetch('/api/ask', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			if (!res.ok) throw new Error(`ask failed: ${res.status}`);
			const next = (await res.json()) as Answer;
			setAnswer(next);
			setSelected(next.id);
		} catch {
			setAnswer({
				id: 'error',
				question: payload.text ?? answer.question,
				body: 'That did not come back.',
				more:
					'The panel could not reach its index. Everything else on this page is static, so scrolling on will still tell you plenty.',
				source: 'request failed',
				timing: '—',
			});
			setSelected('error');
		} finally {
			setBusy(false);
		}
	}

	return (
		<section className="ask" id="ask" aria-labelledby="ask-heading">
			<div className="ask__bar mono">
				<h2 id="ask-heading" className="mono" style={{ fontWeight: 400, fontSize: 12 }}>
					Ask about my work
				</h2>
				<span className="ask__status">
					<span className="ask__dot" aria-hidden="true" />
					{busy ? 'Reading' : 'Ready'}
				</span>
			</div>

			<div className="ask__body">
				<div className="ask__questions">
					<p className="ask__legend mono">Put a question to it</p>
					{questions.map((q) => (
						<button
							key={q.id}
							type="button"
							className="ask__q"
							aria-pressed={selected === q.id}
							onClick={() => ask({ id: q.id })}
						>
							{q.question}
						</button>
					))}

					<form
						className="ask__own"
						onSubmit={(e) => {
							e.preventDefault();
							const text = typed.trim();
							if (text) ask({ text });
						}}
					>
						<label className="mono" htmlFor={inputId}>
							Or ask your own
						</label>
						<input
							id={inputId}
							type="text"
							value={typed}
							maxLength={200}
							placeholder="Type a question…"
							onChange={(e) => setTyped(e.target.value)}
						/>
					</form>
				</div>

				<div className="ask__answer" aria-live="polite" aria-busy={busy}>
					<p className="ask__asked">&gt; {answer.question || 'Ask something'}</p>
					<p className="ask__lead">{answer.body}</p>
					<p className="ask__more">{answer.more}</p>
					<div className="ask__source mono">
						<span>Source: {answer.source}</span>
						<span>{answer.timing}</span>
					</div>
				</div>
			</div>

			<p className="ask__foot mono">
				This panel answers from things David has written down, and says so when it
				has none. It does not guess.
			</p>
		</section>
	);
}
