'use client';

import { useEffect, useRef, useState } from 'react';
import type { Answer } from '@/content/answers';
import type { Gaze } from './Mark';
import LiveMark from './LiveMark';

type Props = {
	answers: Answer[];
};

/** Long enough to read as a beat, short enough not to feel like loading. */
const THINK_MS = 420;
const THINKING: Gaze = { x: -0.5, y: -0.8 };
const READING: Gaze = { x: 0.8, y: 0.35 };

/**
 * A set of answers David wrote, picked from a list. There is no model behind
 * it and no free-text box: every answer ships in the page, so switching between
 * them is local state, not a request. The mark in the header glances up while
 * it "thinks" and then at the answer; that beat is the only delay, and it is
 * skipped when reduced motion is requested.
 */
export default function AskPanel({ answers }: Props) {
	const [selected, setSelected] = useState(answers[0].id);
	const [thinking, setThinking] = useState(false);
	const [look, setLook] = useState<Gaze | null>(null);
	const timers = useRef<number[]>([]);
	const answer = answers.find((a) => a.id === selected) ?? answers[0];

	useEffect(() => () => timers.current.forEach(clearTimeout), []);

	const pick = (id: string) => {
		if (id === selected) return;
		timers.current.forEach(clearTimeout);
		setSelected(id);
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		setThinking(true);
		setLook(THINKING);
		timers.current = [
			window.setTimeout(() => {
				setThinking(false);
				setLook(READING);
			}, THINK_MS),
			window.setTimeout(() => setLook(null), THINK_MS + 1400),
		];
	};

	return (
		<section className="ask" id="ask" aria-labelledby="ask-heading">
			<div className="ask__bar mono">
				<LiveMark size={30} className="ask__mark" look={look} />
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
							onClick={() => pick(a.id)}
						>
							{a.question}
						</button>
					))}
				</div>

				<div
					className={thinking ? 'ask__answer is-thinking' : 'ask__answer'}
					aria-live="polite"
					aria-busy={thinking}
				>
					<p className="ask__asked">&gt; {answer.question}</p>
					<p className="ask__typing" aria-hidden="true">
						<span />
						<span />
						<span />
					</p>
					<div className="ask__reply">
						<p className="ask__lead">{answer.body}</p>
						<p className="ask__more">{answer.more}</p>
						<div className="ask__source mono">
							<span>Source: {answer.source}</span>
							<span>{answer.timing}</span>
						</div>
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
