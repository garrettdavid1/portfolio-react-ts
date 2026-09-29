'use client';

import { useEffect, useState } from 'react';

/**
 * Preview-only tool for comparing color schemes on the real page. It writes the
 * chosen palette's tokens into a style tag, so globals.css stays untouched
 * until one is picked and baked in. Choice is remembered per browser and can be
 * shared with ?palette=<id>&mode=light|dark.
 */

type Tokens = Record<string, string>;
type Palette = { id: string; name: string; light: Tokens; dark: Tokens };

const t = (
	paper: string, raised: string, bright: string,
	ink: string, ink2: string, ink3: string,
	rule: string, ruleStrong: string,
	accent: string, hover: string, soft: string,
	onInk: string, onInk2: string, ok: string, onAccent: string,
): Tokens => ({
	'--paper': paper, '--paper-raised': raised, '--paper-bright': bright,
	'--ink': ink, '--ink-2': ink2, '--ink-3': ink3,
	'--rule': rule, '--rule-strong': ruleStrong,
	'--accent': accent, '--accent-hover': hover, '--accent-soft': soft,
	'--on-ink': onInk, '--on-ink-2': onInk2, '--ok': ok, '--on-accent': onAccent,
});

const PALETTES: Palette[] = [
	{
		id: 'current',
		name: 'Current',
		light: t('#faf8f3', '#f2ede3', '#fffdf8', '#1a1814', '#443e37', '#6b645b', '#ded7ca', '#1a1814', '#9c4a2b', '#74331b', '#d8a98f', '#faf8f3', '#d6d0c6', '#5f8a6d', '#fffdf8'),
		dark: t('#14130f', '#1e1b16', '#191712', '#f3efe7', '#cdc6ba', '#9c9488', '#322d25', '#6b6357', '#e79466', '#f3b48e', '#a06b49', '#14130f', '#3b352c', '#7fae8c', '#14130f'),
	},
	{
		id: 'cobalt',
		name: 'Cobalt',
		light: t('#f7f8fa', '#eceff4', '#ffffff', '#111827', '#374151', '#6b7280', '#dde1e8', '#111827', '#2446d8', '#1a34a6', '#9fb0ee', '#f7f8fa', '#d1d5db', '#1f9d6b', '#ffffff'),
		dark: t('#0d1117', '#161b22', '#11161d', '#e6edf3', '#c3ccd6', '#8b949e', '#262c36', '#57606a', '#7c9cff', '#a8bcff', '#3d4f8f', '#0d1117', '#2d333b', '#3fb950', '#0d1117'),
	},
	{
		id: 'forest',
		name: 'Forest',
		light: t('#f5f3ec', '#ebe7db', '#fbfaf5', '#17231c', '#36453b', '#66736a', '#d9d6c8', '#17231c', '#2f6b4f', '#1f4d38', '#9fc2ae', '#f5f3ec', '#cfd6cf', '#4c8c3f', '#fbfaf5'),
		dark: t('#0f1511', '#18201a', '#131a15', '#e8efe9', '#c3cfc6', '#8d9a91', '#26302a', '#5b6a60', '#7cc4a0', '#a3dcbf', '#3e6b55', '#0f1511', '#2a352e', '#8fcf7a', '#0f1511'),
	},
	{
		id: 'amber',
		name: 'Amber',
		light: t('#f4f4f2', '#e9e9e5', '#fcfcfb', '#1c1c1e', '#3f3f44', '#6e6e75', '#dadad5', '#1c1c1e', '#b86a00', '#8a4f00', '#e6bf85', '#f4f4f2', '#d4d4d0', '#3a8d5c', '#fcfcfb'),
		dark: t('#121214', '#1c1c1f', '#161618', '#ededee', '#c8c8cc', '#909096', '#2b2b30', '#5f5f66', '#f5b041', '#f8c877', '#7a5a24', '#121214', '#333338', '#6fcf97', '#121214'),
	},
	{
		id: 'plum',
		name: 'Plum',
		light: t('#f8f5f7', '#efe8ed', '#fdfbfc', '#1f1520', '#43354a', '#6f6177', '#e2d8e0', '#1f1520', '#7a3c9e', '#5a2a76', '#c9a8dc', '#f8f5f7', '#dcd1da', '#3f8f6e', '#fdfbfc'),
		dark: t('#141016', '#1e1821', '#18131a', '#f1eaf3', '#d2c6d7', '#9d8fa3', '#2f2633', '#685b6e', '#c79bf0', '#dcbdf7', '#6a4a85', '#141016', '#372d3b', '#7fcfaa', '#141016'),
	},
	{
		id: 'midnight',
		name: 'Midnight',
		light: t('#f2f6f5', '#e4ecea', '#fafcfc', '#0f1e1c', '#2e4440', '#5f7470', '#d3dfdc', '#0f1e1c', '#00856a', '#006350', '#8fd1c0', '#f2f6f5', '#c9d6d3', '#00856a', '#fafcfc'),
		dark: t('#0b1220', '#121b2d', '#0e1626', '#e3eaf5', '#b8c4d6', '#7f8ca3', '#1f2a3f', '#4a5873', '#3ee6b0', '#7ff0cb', '#1f6f58', '#0b1220', '#26324a', '#3ee6b0', '#0b1220'),
	},
];

type Mode = 'auto' | 'light' | 'dark';

const block = (tokens: Tokens) =>
	`:root{${Object.entries(tokens).map(([k, v]) => `${k}:${v}`).join(';')}}`;

function css(p: Palette, mode: Mode) {
	if (mode === 'light') return `${block(p.light)}body{color-scheme:light}`;
	if (mode === 'dark') return `${block(p.dark)}body{color-scheme:dark}`;
	return `${block(p.light)}@media (prefers-color-scheme: dark){${block(p.dark)}}`;
}

function read(key: string) {
	try {
		return window.localStorage.getItem(key);
	} catch {
		return null;
	}
}

function write(key: string, value: string) {
	try {
		window.localStorage.setItem(key, value);
	} catch {
		/* storage unavailable; the choice just will not persist */
	}
}

export default function PalettePicker() {
	const [id, setId] = useState('current');
	const [mode, setMode] = useState<Mode>('auto');
	const [open, setOpen] = useState(true);

	useEffect(() => {
		const q = new URLSearchParams(window.location.search);
		const pid = q.get('palette') ?? read('palette');
		const m = q.get('mode') ?? read('palette-mode');
		if (pid && PALETTES.some((p) => p.id === pid)) setId(pid);
		if (m === 'light' || m === 'dark' || m === 'auto') setMode(m);
	}, []);

	useEffect(() => {
		const p = PALETTES.find((x) => x.id === id) ?? PALETTES[0];
		let tag = document.getElementById('palette-preview') as HTMLStyleElement | null;
		if (!tag) {
			tag = document.createElement('style');
			tag.id = 'palette-preview';
			document.head.appendChild(tag);
		}
		tag.textContent = id === 'current' && mode === 'auto' ? '' : css(p, mode);
		write('palette', id);
		write('palette-mode', mode);
	}, [id, mode]);

	if (!open) {
		return (
			<div className="palette">
				<button type="button" className="palette__toggle" onClick={() => setOpen(true)}>
					Colors
				</button>
			</div>
		);
	}

	return (
		<div className="palette" role="group" aria-label="Color scheme preview">
			<div className="palette__row">
				{PALETTES.map((p) => (
					<button key={p.id} type="button" aria-pressed={id === p.id} onClick={() => setId(p.id)}>
						<span className="palette__swatch" style={{ background: p.light['--accent'] }} />
						<span className="palette__swatch" style={{ background: p.dark['--paper'] }} />
						{p.name}
					</button>
				))}
			</div>
			<div className="palette__row">
				{(['auto', 'light', 'dark'] as Mode[]).map((m) => (
					<button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}>
						{m === 'auto' ? 'Auto' : m === 'light' ? 'Light' : 'Dark'}
					</button>
				))}
				<button type="button" onClick={() => setOpen(false)}>
					Hide
				</button>
			</div>
		</div>
	);
}
