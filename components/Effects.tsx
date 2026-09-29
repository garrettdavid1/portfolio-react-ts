'use client';

import { useEffect, useState } from 'react';

/**
 * Page effects, each one switchable. The site ships the set named in
 * content/site.ts; previews also get a panel to try them on and off, remembered
 * per browser and shareable with ?fx=reveal,count. Every effect is added by
 * script and removed on cleanup, so the page reads fine with none of them, and
 * motion effects stay off when reduced motion is requested.
 */

export const EFFECTS = [
	{ id: 'reveal', name: 'Reveal', hint: 'sections rise in as you scroll' },
	{ id: 'count', name: 'Count up', hint: 'live numbers tick up into view' },
	{ id: 'depth', name: 'Depth', hint: 'progress bar, parallax, current section lit' },
	{ id: 'spotlight', name: 'Spotlight', hint: 'a glow follows your finger or cursor' },
	{ id: 'ripple', name: 'Ripple', hint: 'taps send a ripple through what you touch' },
] as const;

type Id = (typeof EFFECTS)[number]['id'];

const REVEAL = '.section-label, .section-head, .value__item, .case, .arc, .ask, .how__point, .note, .briefing';
const LIT = '.value__item, .case, .pulse, .how__point, .note, .ask, .briefing';
const RIPPLE = '.btn, .ask__q, .value__item, .pulse__stat, .case, .masthead__nav a, .companion__bot, .note';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function reveal() {
	const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (!e.isIntersecting) continue;
				e.target.classList.add('is-in');
				io.unobserve(e.target);
			}
		},
		{ rootMargin: '0px 0px -8% 0px' },
	);
	for (const el of els) {
		const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
		el.style.setProperty('--fx-i', String(siblings.indexOf(el) % 4));
		el.classList.add('fx-reveal');
		io.observe(el);
	}
	return () => {
		io.disconnect();
		for (const el of els) el.classList.remove('fx-reveal', 'is-in');
	};
}

function count() {
	const els = Array.from(document.querySelectorAll<HTMLElement>('.pulse__stat dd'));
	const finals = els.map((el) => Number(el.textContent) || 0);
	const frames: number[] = [];
	els.forEach((el) => (el.textContent = '0'));
	const io = new IntersectionObserver((entries) => {
		for (const e of entries) {
			if (!e.isIntersecting) continue;
			io.unobserve(e.target);
			const i = els.indexOf(e.target as HTMLElement);
			const start = performance.now();
			const tick = (now: number) => {
				const k = Math.min(1, (now - start) / 1400);
				els[i].textContent = String(Math.round(finals[i] * (1 - Math.pow(1 - k, 3))));
				if (k < 1) frames[i] = requestAnimationFrame(tick);
			};
			frames[i] = requestAnimationFrame(tick);
		}
	}, { threshold: 0.6 });
	els.forEach((el) => io.observe(el));
	return () => {
		io.disconnect();
		frames.forEach(cancelAnimationFrame);
		els.forEach((el, i) => (el.textContent = String(finals[i])));
	};
}

function depth() {
	const bar = document.createElement('div');
	bar.className = 'fx-progress';
	bar.setAttribute('aria-hidden', 'true');
	document.body.appendChild(bar);
	const root = document.documentElement;
	let frame = 0;
	const onScroll = () => {
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(() => {
			const max = root.scrollHeight - innerHeight || 1;
			root.style.setProperty('--fx-p', String(Math.min(1, scrollY / max)));
			root.style.setProperty('--fx-y', String(scrollY));
		});
	};
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });

	const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.masthead__nav a[href^="#"]'));
	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (!e.isIntersecting) continue;
				for (const a of links) a.classList.toggle('is-current', a.getAttribute('href') === `#${e.target.id}`);
			}
		},
		{ rootMargin: '-45% 0px -50% 0px' },
	);
	for (const a of links) {
		const el = document.querySelector(a.getAttribute('href')!);
		if (el) io.observe(el);
	}
	return () => {
		cancelAnimationFrame(frame);
		window.removeEventListener('scroll', onScroll);
		io.disconnect();
		bar.remove();
		links.forEach((a) => a.classList.remove('is-current'));
		root.style.removeProperty('--fx-p');
		root.style.removeProperty('--fx-y');
	};
}

function spotlight() {
	let lit: HTMLElement | null = null;
	let fade = 0;
	const aim = (e: PointerEvent) => {
		const el = (e.target as Element | null)?.closest<HTMLElement>(LIT) ?? null;
		if (lit && lit !== el) lit.classList.remove('fx-lit');
		lit = el;
		if (!el) return;
		const box = el.getBoundingClientRect();
		el.style.setProperty('--fx-x', `${e.clientX - box.left}px`);
		el.style.setProperty('--fx-y', `${e.clientY - box.top}px`);
		el.classList.add('fx-lit');
		clearTimeout(fade);
		if (e.pointerType !== 'mouse') fade = window.setTimeout(() => el.classList.remove('fx-lit'), 900);
	};
	// Touch pointers "leave" the page on every lift; only a mouse leaving should dim the glow.
	const leave = (e: PointerEvent) => {
		if (e.pointerType === 'mouse') lit?.classList.remove('fx-lit');
	};
	document.addEventListener('pointermove', aim, { passive: true });
	document.addEventListener('pointerdown', aim, { passive: true });
	document.documentElement.addEventListener('pointerleave', leave);
	return () => {
		clearTimeout(fade);
		document.removeEventListener('pointermove', aim);
		document.removeEventListener('pointerdown', aim);
		document.documentElement.removeEventListener('pointerleave', leave);
		document.querySelectorAll('.fx-lit').forEach((el) => el.classList.remove('fx-lit'));
	};
}

function ripple() {
	const onDown = (e: PointerEvent) => {
		const el = (e.target as Element | null)?.closest<HTMLElement>(RIPPLE);
		if (!el) return;
		const box = el.getBoundingClientRect();
		const size = Math.max(box.width, box.height) * 2.2;
		const dot = document.createElement('span');
		dot.className = 'fx-ripple';
		dot.setAttribute('aria-hidden', 'true');
		dot.style.cssText = `left:${e.clientX - box.left}px;top:${e.clientY - box.top}px;width:${size}px;height:${size}px`;
		el.appendChild(dot);
		dot.addEventListener('animationend', () => dot.remove(), { once: true });
	};
	document.addEventListener('pointerdown', onDown, { passive: true });
	return () => {
		document.removeEventListener('pointerdown', onDown);
		document.querySelectorAll('.fx-ripple').forEach((el) => el.remove());
	};
}

const RUN: Record<Id, { motion: boolean; start: () => () => void }> = {
	reveal: { motion: true, start: reveal },
	count: { motion: true, start: count },
	depth: { motion: true, start: depth },
	spotlight: { motion: false, start: spotlight },
	ripple: { motion: true, start: ripple },
};

function stored(): Id[] | null {
	try {
		const q = new URLSearchParams(window.location.search).get('fx');
		const raw = q ?? window.localStorage.getItem('fx');
		if (raw === null) return null;
		return raw.split(',').filter((x): x is Id => EFFECTS.some((e) => e.id === x));
	} catch {
		return null;
	}
}

type Props = {
	/** The effects the site ships with. */
	enabled: readonly Id[];
	/** Show the preview panel for switching effects. */
	picker: boolean;
};

export default function Effects({ enabled, picker }: Props) {
	const [on, setOn] = useState<Id[]>([...enabled]);
	const [open, setOpen] = useState(true);

	useEffect(() => {
		if (!picker) return;
		const saved = stored();
		if (saved) setOn(saved);
	}, [picker]);

	useEffect(() => {
		const still = reduced();
		const root = document.documentElement;
		const active = on.filter((id) => !(still && RUN[id].motion));
		root.dataset.fx = active.join(' ');
		const stops = active.map((id) => RUN[id].start());
		if (picker) {
			try {
				window.localStorage.setItem('fx', on.join(','));
			} catch {
				/* storage unavailable; the choice just will not persist */
			}
		}
		return () => {
			stops.forEach((stop) => stop());
			delete root.dataset.fx;
		};
	}, [on, picker]);

	if (!picker) return null;

	const toggle = (id: Id) => setOn((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

	if (!open) {
		return (
			<div className="fxpick">
				<button type="button" onClick={() => setOpen(true)}>
					Effects
				</button>
			</div>
		);
	}

	return (
		<div className="fxpick" role="group" aria-label="Effects preview">
			{EFFECTS.map((e, i) => (
				<button key={e.id} type="button" aria-pressed={on.includes(e.id)} onClick={() => toggle(e.id)}>
					<strong>
						{i + 1}. {e.name}
					</strong>
					<span>{e.hint}</span>
				</button>
			))}
			<div className="fxpick__row">
				<button type="button" onClick={() => setOn(EFFECTS.map((e) => e.id))}>
					All on
				</button>
				<button type="button" onClick={() => setOn([])}>
					All off
				</button>
				<button type="button" onClick={() => setOpen(false)}>
					Hide
				</button>
			</div>
		</div>
	);
}
