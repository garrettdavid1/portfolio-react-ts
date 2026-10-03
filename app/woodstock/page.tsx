import type { Metadata } from 'next';
import Link from 'next/link';
import LocalFrame from '@/components/LocalFrame';
import { hub, packages, pricesPublished, services, towns } from '@/content/woodstock';
import { breadcrumbs, businessSchema } from '@/lib/local-schema';

const title = pricesPublished ? hub.titlePriced : hub.title;

export const metadata: Metadata = {
	title: { absolute: title },
	description: hub.description,
	alternates: { canonical: hub.path },
	openGraph: { title, description: hub.description, url: hub.path, type: 'website', images: ['/opengraph-image'] },
};

export default function Woodstock() {
	const trail = [
		{ name: 'Home', path: '/' },
		{ name: hub.crumb, path: hub.path },
	];

	return (
		<LocalFrame crumbs={trail} contactTitle={hub.contact.title} schema={[businessSchema(), breadcrumbs(trail)]}>
			<div className="hero wrap">
				<p className="local__kicker mono">{hub.kicker}</p>
				<h1>{hub.h1}</h1>
				<p>{hub.lede}</p>
				<div className="hero__actions">
					<a className="btn btn--solid" href="#contact">
						Book a first visit
					</a>
					<a className="btn btn--ghost" href="#services">
						See services
					</a>
				</div>
			</div>

			<section className="how wrap" aria-labelledby="why-heading">
				<div className="how__intro">
					<h2 className="section-label" id="why-heading">
						{hub.why.heading}
					</h2>
				</div>
				<div className="how__grid">
					{hub.why.points.map((p) => (
						<div className="how__point" key={p.title}>
							<h3>{p.title}</h3>
							<p>{p.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="local wrap" id="services" aria-labelledby="services-heading">
				<h2 className="section-label" id="services-heading">
					{hub.servicesHeading}
				</h2>
				<div className="local__cards">
					{services.map((s) => (
						<Link className="local__card" href={`${hub.path}/${s.slug}`} key={s.slug}>
							<h3>{s.crumb}</h3>
							<p>{s.card}</p>
							<span className="local__more mono">Read more</span>
						</Link>
					))}
				</div>
			</section>

			<section className="local wrap" id="packages" aria-labelledby="packages-heading">
				<h2 className="section-label" id="packages-heading">
					{hub.packagesHeading}
				</h2>
				<dl className="local__packages">
					{packages.map((p) => (
						<div className="local__package" key={p.name}>
							<dt>
								{p.name}
								{pricesPublished ? <span className="local__price">{p.price}</span> : null}
							</dt>
							<dd>{p.what}</dd>
						</div>
					))}
				</dl>
				<p className="local__note">{hub.capacity}</p>
			</section>

			<section className="how wrap" aria-labelledby="visit-heading">
				<div className="how__intro">
					<h2 className="section-label" id="visit-heading">
						{hub.visit.heading}
					</h2>
				</div>
				<ol className="how__grid local__steps">
					{hub.visit.steps.map((s) => (
						<li className="how__point" key={s.title}>
							<h3>{s.title}</h3>
							<p>{s.body}</p>
						</li>
					))}
				</ol>
			</section>

			<section className="local wrap" aria-labelledby="who-heading">
				<h2 className="section-label" id="who-heading">
					{hub.who.heading}
				</h2>
				<div className="local__cards">
					{hub.who.items.map((w) => (
						<div className="local__card local__card--plain" key={w.title}>
							<h3>{w.title}</h3>
							<p>{w.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="local wrap" aria-labelledby="areas-heading">
				<h2 className="section-label" id="areas-heading">
					{hub.areas.heading}
				</h2>
				<ul className="local__towns">
					{towns.map((t) => (
						<li key={t}>{t}</li>
					))}
				</ul>
				<p className="local__note">{hub.areas.body}</p>
			</section>

			<section className="local wrap" aria-labelledby="about-heading">
				<h2 className="section-label" id="about-heading">
					{hub.about.heading}
				</h2>
				<p className="local__body">
					{hub.about.body} <Link href="/#work">{hub.about.link}</Link>.
				</p>
			</section>
		</LocalFrame>
	);
}
