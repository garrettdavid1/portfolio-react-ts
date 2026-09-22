'use client';

import { useState } from 'react';
import type { Answer } from '@/content/answers';

type Props = {
	answers: Answer[];
};

/**
 * A set of answers David wrote, picked from a list. There is no model behind
 * it and no free-text box: every answer ships in the page, so switching between
 * them is local state, not a request.
 */
export default function AskPanel({ answers }: Props) {
	const [selected, setSelected] = useState(answers[0].id);
	const answer = answers.find((a) => a.id === selected) ?? answers[0];

	return (
		<section className="ask" id="ask" aria-labelledby="ask-heading">
			<div className="ask__bar mono">
				<h2 id="ask-heading" className="mono" style={{ fontWeight: 400, fontSize: 12 }}>
					Ask about my work
				</h2>
			</div>

			<div className="ask__body">
				<div className="ask__questions">
					<p className="ask__legend mono">Pick a question</p>
					{answers.map((a) => (
						<button
							key={a.id}
							type="button"
							className="ask__q"
							aria-pressed={selected === a.id}
							onClick={() => setSelected(a.id)}
						>
							{a.question}
						</button>
					))}
				</div>

				<div className="ask__answer" aria-live="polite">
					<p className="ask__asked">&gt; {answer.question}</p>
					<p className="ask__lead">{answer.body}</p>
					<p className="ask__more">{answer.more}</p>
					<div className="ask__source mono">
						<span>Source: {answer.source}</span>
						<span>{answer.timing}</span>
					</div>
				</div>
			</div>

			<p className="ask__foot mono">
				Seven questions I get asked, answered from the record. If yours is
				missing, email me.
			</p>
		</section>
	);
}
