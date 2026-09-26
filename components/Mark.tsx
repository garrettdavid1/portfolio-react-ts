/**
 * The "dg" mark. The bowls of the lowercase d and g double as a pair of eyes,
 * so the same drawing is the logo when it sits still and the bot when the
 * pupils move. Geometry is hand-set, not a font glyph, so it renders the same
 * everywhere, including as the favicon.
 */

export type Gaze = { x: number; y: number };

type Props = {
	/** Rendered width; height follows the viewBox. */
	size?: number | string;
	/** Pupil offset in viewBox units, each axis roughly -1 to 1. */
	gaze?: Gaze;
	blink?: boolean;
	title?: string;
	className?: string;
};

/** How far a pupil can travel inside its bowl, in viewBox units. */
const REACH = 5.5;

export default function Mark({ size = 40, gaze, blink = false, title, className }: Props) {
	const dx = (gaze?.x ?? 0) * REACH;
	const dy = (gaze?.y ?? 0) * REACH;
	const label = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true };

	return (
		<svg
			className={className ? `mark ${className}` : 'mark'}
			viewBox="3 1 74 67"
			width={size}
			fill="none"
			{...label}
		>
			<g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
				<circle cx="22" cy="34" r="13" />
				<path d="M35 6 V47" />
				<circle cx="57" cy="34" r="13" />
				<path d="M70 21 V51 Q70 63 58 63 H50" />
			</g>
			<g className="mark__pupils" transform={`translate(${dx} ${dy})`}>
				<circle className={blink ? 'mark__pupil is-shut' : 'mark__pupil'} cx="22" cy="34" r="4.5" />
				<circle className={blink ? 'mark__pupil is-shut' : 'mark__pupil'} cx="57" cy="34" r="4.5" />
			</g>
		</svg>
	);
}
