'use client';

import { useEffect, useRef, useState } from 'react';
import Mark, { type Gaze } from './Mark';

type Props = {
	size?: number | string;
	title?: string;
	className?: string;
	/** Overrides pointer tracking while set, e.g. to look at an answer. */
	look?: Gaze | null;
};

const CENTER: Gaze = { x: 0, y: 0 };

/**
 * The mark with its eyes open: pupils follow the pointer, glance up or down
 * with scrolling on touch screens, and blink every few seconds. With reduced
 * motion requested it stays still.
 */
export default function LiveMark({ size, title, className, look }: Props) {
	const ref = useRef<HTMLSpanElement>(null);
	const [gaze, setGaze] = useState<Gaze>(CENTER);
	const [blink, setBlink] = useState(false);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let frame = 0;
		let settle = 0;
		let lastY = window.scrollY;

		const aim = (px: number, py: number) => {
			const box = ref.current?.getBoundingClientRect();
			if (!box) return;
			const vx = px - (box.left + box.width / 2);
			const vy = py - (box.top + box.height / 2);
			const dist = Math.hypot(vx, vy) || 1;
			const pull = Math.min(1, dist / 240);
			setGaze({ x: (vx / dist) * pull, y: (vy / dist) * pull });
		};

		const onPointer = (e: PointerEvent) => {
			if (e.pointerType !== 'mouse') return;
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => aim(e.clientX, e.clientY));
		};

		const onScroll = () => {
			const y = window.scrollY;
			const down = y > lastY;
			lastY = y;
			setGaze({ x: 0.15, y: down ? 0.8 : -0.8 });
			clearTimeout(settle);
			settle = window.setTimeout(() => setGaze(CENTER), 700);
		};

		let blinkTimer = 0;
		const scheduleBlink = () => {
			blinkTimer = window.setTimeout(() => {
				setBlink(true);
				window.setTimeout(() => setBlink(false), 140);
				scheduleBlink();
			}, 2600 + Math.random() * 3800);
		};
		scheduleBlink();

		const coarse = window.matchMedia('(pointer: coarse)').matches;
		window.addEventListener('pointermove', onPointer, { passive: true });
		if (coarse) window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			cancelAnimationFrame(frame);
			clearTimeout(settle);
			clearTimeout(blinkTimer);
			window.removeEventListener('pointermove', onPointer);
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<span ref={ref} className={className ? `live-mark ${className}` : 'live-mark'}>
			<Mark size={size} gaze={look ?? gaze} blink={blink} title={title} />
		</span>
	);
}
