'use client';

import { useEffect, useRef, useState } from 'react';
import LiveMark from './LiveMark';

export type Line = { section: string; text: string };

type Props = {
	lines: Line[];
	/** The hero's copy of the mark. The companion shows once it scrolls away. */
	anchorId: string;
};

const SHOW_FOR_MS = 5200;

/**
 * The mark, following the reader down the page. It takes over from the hero's
 * copy once that scrolls out of view, says one line the first time each section
 * reaches the middle of the screen, and repeats the current line on click.
 */
export default function Companion({ lines, anchorId }: Props) {
	const [present, setPresent] = useState(false);
	const [current, setCurrent] = useState<Line | null>(null);
	const [open, setOpen] = useState(false);
	const said = useRef(new Set<string>());
	const hideTimer = useRef(0);

	const say = (line: Line) => {
		setCurrent(line);
		setOpen(true);
		clearTimeout(hideTimer.current);
		hideTimer.current = window.setTimeout(() => setOpen(false), SHOW_FOR_MS);
	};

	useEffect(() => {
		const anchor = document.getElementById(anchorId);
		if (!anchor) {
			setPresent(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => setPresent(!entry.isIntersecting));
		io.observe(anchor);
		return () => io.disconnect();
	}, [anchorId]);

	useEffect(() => {
		if (!present) {
			setOpen(false);
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					const line = lines.find((l) => l.section === entry.target.id);
					if (!line) continue;
					if (said.current.has(line.section)) {
						setCurrent(line);
						continue;
					}
					said.current.add(line.section);
					say(line);
				}
			},
			{ rootMargin: '-45% 0px -45% 0px' },
		);
		for (const l of lines) {
			const el = document.getElementById(l.section);
			if (el) io.observe(el);
		}
		return () => io.disconnect();
	}, [present, lines]);

	useEffect(() => () => clearTimeout(hideTimer.current), []);

	const toggle = () => {
		if (open) {
			clearTimeout(hideTimer.current);
			setOpen(false);
		} else {
			say(current ?? lines[0]);
		}
	};

	return (
		<div className={present ? 'companion is-present' : 'companion'}>
			<p id="companion-note" className={open ? 'companion__note is-open' : 'companion__note'}>
				{current?.text}
			</p>
			<button
				type="button"
				className="companion__bot"
				aria-label="A note from David's agent"
				aria-controls="companion-note"
				aria-expanded={open}
				tabIndex={present ? 0 : -1}
				onClick={toggle}
			>
				<LiveMark size={46} />
			</button>
		</div>
	);
}
