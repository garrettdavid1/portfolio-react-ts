import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

/** The card LinkedIn, Slack and texts show when someone shares the site. */

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '72px 80px',
					color: '#e3eaf5',
					backgroundColor: '#0b1220',
					backgroundImage:
						'radial-gradient(circle at 95% 0%, rgba(62,230,176,0.22), transparent 55%), radial-gradient(circle at 0% 100%, rgba(167,139,250,0.20), transparent 55%)',
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
					<svg width="132" height="120" viewBox="3 1 74 67" fill="none">
						<g stroke="#e3eaf5" strokeWidth="6" strokeLinecap="round">
							<circle cx="22" cy="34" r="13" />
							<path d="M35 6 V47" />
							<circle cx="57" cy="34" r="13" />
							<path d="M70 21 V51 Q70 63 58 63 H50" />
						</g>
						<circle cx="22" cy="34" r="4.5" fill="#3ee6b0" />
						<circle cx="57" cy="34" r="4.5" fill="#3ee6b0" />
					</svg>
					<div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
				</div>
				<div style={{ fontSize: 64, lineHeight: 1.12, fontWeight: 600, letterSpacing: -1.5, maxWidth: 980 }}>
					{site.tagline}
				</div>
				<div style={{ display: 'flex', gap: 14, fontSize: 26, color: '#b8c4d6' }}>
					<div style={{ width: 60, height: 6, borderRadius: 3, marginTop: 13, background: 'linear-gradient(90deg, #3ee6b0, #a78bfa, #5cc8ff)' }} />
					{site.domain}
				</div>
			</div>
		),
		size,
	);
}
