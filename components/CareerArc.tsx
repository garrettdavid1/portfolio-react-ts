import type { CSSProperties } from 'react';
import { record } from '@/content/site';

/**
 * Wide screens draw the career as an engraved axis running April 2017 to late
 * 2026, positioning each role with the `--pos` custom property so the spacing
 * is real time. Narrow screens fall back to a plain ordered list, which is
 * also what a screen reader gets either way.
 *
 * The rust segment over the axis is the stretch when the consultancy ran
 * alongside a full-time job.
 */
export default function CareerArc() {
	const { span } = record;

	return (
		<section className="arc wrap" id="record" aria-labelledby="arc-heading">
			<h2 className="section-label" id="arc-heading">
				{record.heading}
			</h2>
			<p className="arc__intro">{record.intro}</p>

			<ol className="timeline">
				<span className="timeline__axis" aria-hidden="true" />
				<span
					className="timeline__span"
					aria-hidden="true"
					style={
						{
							'--from': String(span.from),
							'--to': String(span.to),
						} as CSSProperties
					}
				/>
				{record.roles.map((r) => (
					<li
						key={r.org}
						className={`timeline__item timeline__item--${r.side}`}
						style={{ '--pos': String(r.pos) } as CSSProperties}
					>
						<span className="timeline__time">{r.year}</span>
						<span className="timeline__text">
							<span className="timeline__org">{r.org}</span>
							<span className="timeline__role">{r.role}</span>
							<span className="timeline__note">{r.note}</span>
						</span>
					</li>
				))}
				<div className="timeline__scale" aria-hidden="true">
					{record.axisLabels.map((a) => (
						<span
							key={a.label}
							className="timeline__tick"
							style={{ '--pos': String(a.pos) } as CSSProperties}
						>
							{a.label}
						</span>
					))}
				</div>
			</ol>
		</section>
	);
}
