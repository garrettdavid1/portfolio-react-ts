import type { Metadata } from 'next';
import SubscribeForm from '@/components/SubscribeForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
	title: 'The morning briefing agent',
	description:
		'A free morning briefing agent you install in about fifteen minutes. It reads your calendar and inbox and sends one short plan for the day.',
};

/**
 * The signup page the LinkedIn funnel points at. Deliberately its own page:
 * the homepage is about the work, not about the tooling.
 */
export default function Briefing() {
	return (
		<>
			<header className="wrap">
				<div className="masthead">
					<a className="masthead__name" href="/">
						{site.name}
					</a>
					<nav className="masthead__nav" aria-label="Sections">
						<a href="/#work">Work</a>
						<a href="/#contact">Get in touch</a>
					</nav>
				</div>
			</header>

			<main id="main" className="wrap">
				<div className="hero">
					<h1>The morning briefing agent I use every day</h1>
					<p>
						It reads your calendar and your inbox before you wake up and sends one short
						plan for the day: what is on, what is at risk, and what it already handled.
						Free, about fifteen minutes to install, yours to change.
					</p>
				</div>

				<section className="briefing" aria-labelledby="signup-heading">
					<div>
						<p className="briefing__kicker mono">Where to send it</p>
						<h2 id="signup-heading">Tell me where it should land</h2>
						<p>
							I send the thing itself, then I write about once a fortnight on building
							with agents and checking their work. Unsubscribe whenever.
						</p>
					</div>
					<SubscribeForm />
				</section>
			</main>

			<footer className="footer wrap">
				<div>
					<div className="footer__name">{site.name}</div>
					<div className="footer__line">{site.location}</div>
				</div>
				<div className="footer__links">
					<a href="/">Back to the work</a>
				</div>
			</footer>
		</>
	);
}
