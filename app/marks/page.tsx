import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Mark from '@/components/Mark';

/**
 * Logo options for David to choose between. Served on preview deploys and in
 * development only; production returns a 404 so it never becomes a public page.
 */
export const metadata: Metadata = {
	title: 'Logo options',
	robots: { index: false, follow: false },
};

function Seal() {
	return (
		<svg className="mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">
			<circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" />
			<circle cx="50" cy="50" r="37" stroke="currentColor" strokeWidth="1" />
			<text
				x="50"
				y="61"
				textAnchor="middle"
				fill="currentColor"
				style={{ font: '600 32px var(--font-display), Georgia, serif' }}
			>
				DG
			</text>
			<circle cx="50" cy="80" r="2.6" style={{ fill: 'var(--accent)' }} />
		</svg>
	);
}

function Prompt() {
	return (
		<svg className="mark" viewBox="0 0 110 60" fill="none" aria-hidden="true">
			<text
				x="4"
				y="44"
				fill="currentColor"
				style={{ font: '500 44px var(--font-mono), ui-monospace, monospace' }}
			>
				dg
			</text>
			<rect x="62" y="12" width="20" height="36" style={{ fill: 'var(--accent)' }} />
		</svg>
	);
}

const options = [
	{
		name: 'A. The dg bot (recommended, and live on the site now)',
		draw: () => <Mark size="100%" />,
		why: 'A lowercase d and g drawn so the two bowls are a pair of eyes. It reads as your initials when it sits still and becomes the bot when the pupils move, so the logo and the animation are one character.',
	},
	{
		name: 'B. The seal',
		draw: () => <Seal />,
		why: 'A classic monogram stamp in the site’s serif. Reads as established and editorial, but it cannot come alive as the bot, so the two would be separate drawings.',
	},
	{
		name: 'C. The prompt',
		draw: () => <Prompt />,
		why: 'Your initials at a terminal prompt with the cursor in the accent color. Instantly says engineer. It is also the most common idea in developer branding.',
	},
];

export default function MarksPage() {
	if (process.env.VERCEL_ENV === 'production') notFound();

	return (
		<main className="marks wrap">
			<h1 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 400 }}>Logo options</h1>
			<p style={{ maxWidth: 640, color: 'var(--ink-2)' }}>
				Each is shown on the light and dark backgrounds the site uses, and at favicon, masthead
				and hero sizes. This page only exists on previews.
			</p>
			<div className="marks__grid">
				{options.map((o) => (
					<section className="marks__option" key={o.name}>
						<h2 style={{ fontSize: 20, fontWeight: 600 }}>{o.name}</h2>
						<div className="marks__tiles">
							<div className="marks__tile">{o.draw()}</div>
							<div className="marks__tile marks__tile--dark">{o.draw()}</div>
						</div>
						<div className="marks__sizes">
							{[16, 32, 64].map((px) => (
								<span key={px} style={{ width: px, display: 'block' }}>
									{o.draw()}
								</span>
							))}
						</div>
						<p>{o.why}</p>
					</section>
				))}
			</div>
		</main>
	);
}
