'use client';

import { useEffect } from 'react';

/**
 * Scroll effects: sections rise in as they reach the screen, and "depth" adds
 * a progress bar, a slower-moving hero mark and an underline on the current
 * section's nav link. Both are added by script and removed on cleanup, so the
 * page reads fine without them, and neither runs when reduced motion is
 * requested.
 */

const REVEAL = '.section-label, .section-head, .value__item, .case, .arc, .ask, .how__point, .note, .briefing';

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

export default function Effects() {
	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const root = document.documentElement;
		root.dataset.fx = 'reveal depth';
		const stops = [reveal(), depth()];
		return () => {
			stops.forEach((stop) => stop());
			delete root.dataset.fx;
		};
	}, []);

	return null;
}
