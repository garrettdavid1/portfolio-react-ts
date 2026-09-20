import type { CSSProperties } from 'react';
import { record } from '@/content/site';

/**
 * Wide screens draw the career as an engraved axis, positioning each role with
 * the `--pos` custom property. Narrow screens fall back to a plain ordered
 * list, which is also what a screen reader gets either way.
 *
 * Markers are evenly spaced because the real years are not in yet. Once they
 * are, replace `spread()` with a map from year to fraction and the axis
 * becomes proportional without touching anything else.
 */
const FIRST = 0.04;
const LAST = 0.94;

function spread(i: number, n: number): number {
	if (n < 2) return 0.5;
	return FIRST + ((LAST - FIRST) * i) / (n - 1);
}

export default function CareerArc() {
	const roles = record.roles;

	return (
		<section className="arc wrap" id="record" aria-labelledby="arc-heading">
			<h2 className="section-label" id="arc-heading">
				{record.heading}
			</h2>
			<p className="arc__intro">{record.intro}</p>

			<ol className="timeline">
				<span className="timeline__axis" aria-hidden="true" />
				{roles.map((r, i) => (
					<li
						key={r.org}
						className={`timeline__item timeline__item--${r.side}`}
						style={{ '--pos': String(spread(i, roles.length)) } as CSSProperties}
					>
						<span className="timeline__time">{r.year}</span>
						<span className="timeline__text">
							<span className="timeline__org">{r.org}</span>
							<span className="timeline__role">{r.role}</span>
							<span className="timeline__note">{r.note}</span>
						</span>
					</li>
				))}
			</ol>
		</section>
	);
}
