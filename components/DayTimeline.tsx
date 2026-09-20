import type { CSSProperties } from 'react';
import { day } from '@/content/site';

/**
 * Wide screens draw this as an engraved 05:00–23:00 axis, positioning each
 * event with the `--pos` custom property. Narrow screens fall back to a plain
 * ordered list, which is also what a screen reader gets either way.
 */
export default function DayTimeline() {
	return (
		<div className="day wrap">
			<h2 className="section-label">{day.title}</h2>
			<p className="day__intro">{day.intro}</p>

			<ol className="timeline">
				<span className="timeline__axis" aria-hidden="true" />
				{day.events.map((e) => (
					<li
						key={e.time}
						className={[
							'timeline__item',
							`timeline__item--${e.side}`,
							e.held ? 'timeline__item--held' : '',
						]
							.filter(Boolean)
							.join(' ')}
						style={{ '--pos': String(e.pos) } as CSSProperties}
					>
						<span className="timeline__time">{e.time}</span>
						<span className="timeline__text">
							{'label' in e && e.label ? (
								<span className="timeline__flag">{e.label}</span>
							) : null}
							{e.text}
						</span>
					</li>
				))}
				<div className="timeline__hours" aria-hidden="true">
					{day.hours.map((h) => (
						<span key={h}>{h}</span>
					))}
				</div>
			</ol>
		</div>
	);
}
