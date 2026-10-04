import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LocalFrame from '@/components/LocalFrame';
import { hub, serviceBySlug, services } from '@/content/woodstock';
import { breadcrumbs, businessSchema, serviceSchema } from '@/lib/local-schema';

export const dynamicParams = false;

export function generateStaticParams() {
	return services.map((s) => ({ service: s.slug }));
}

type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const s = serviceBySlug((await params).service);
	if (!s) return {};
	const title = s.title;
	const path = `${hub.path}/${s.slug}`;
	return {
		title: { absolute: title },
		description: s.description,
		alternates: { canonical: path },
		openGraph: { title, description: s.description, url: path, type: 'website', images: ['/opengraph-image'] },
	};
}

export default async function ServicePage({ params }: Props) {
	const s = serviceBySlug((await params).service);
	if (!s) notFound();

	const trail = [
		{ name: 'Home', path: '/' },
		{ name: hub.crumb, path: hub.path },
		{ name: s.crumb, path: `${hub.path}/${s.slug}` },
	];
	const others = services.filter((o) => o.slug !== s.slug);

	return (
		<LocalFrame crumbs={trail} contactTitle={s.contactTitle} schema={[businessSchema(), serviceSchema(s), breadcrumbs(trail)]}>
			<div className="hero wrap">
				<p className="local__kicker mono">{s.crumb}, Woodstock, GA</p>
				<h1>{s.h1}</h1>
				<p>{s.lede}</p>
				<div className="hero__actions">
					<a className="btn btn--solid" href="#contact">
						Book a free consultation
					</a>
				</div>
			</div>

			{s.sections.map((sec) => (
				<section className="local wrap" key={sec.heading} aria-label={sec.heading}>
					<h2 className="section-label">{sec.heading}</h2>
					{sec.body ? <p className="local__body">{sec.body}</p> : null}
					{sec.items ? (
						<ul className="local__list">
							{sec.items.map((it) => (
								<li key={it}>{it}</li>
							))}
						</ul>
					) : null}
				</section>
			))}

			{s.examples ? (
				<section className="local wrap" aria-label={s.examples.heading}>
					<h2 className="section-label">{s.examples.heading}</h2>
					<div className="local__examples">
						{s.examples.items.map((e) => (
							<article className="local__example" key={e.who}>
								<h3>{e.who}</h3>
								<p>
									<span className="mono">Before</span> {e.before}
								</p>
								<p>
									<span className="mono">After</span> {e.after}
								</p>
							</article>
						))}
					</div>
				</section>
			) : null}

			<section className="local wrap" aria-labelledby="cost-heading">
				<h2 className="section-label" id="cost-heading">
					What it costs
				</h2>
				<p className="local__body">{s.cost}</p>
			</section>

			<section className="local wrap" aria-labelledby="faq-heading">
				<h2 className="section-label" id="faq-heading">
					Questions owners ask
				</h2>
				<div className="local__faq">
					{s.faq.map((f) => (
						<details key={f.q}>
							<summary>{f.q}</summary>
							<p>{f.a}</p>
						</details>
					))}
				</div>
			</section>

			<section className="local wrap" aria-labelledby="more-heading">
				<h2 className="section-label" id="more-heading">
					More for Woodstock businesses
				</h2>
				<div className="local__cards">
					{others.map((o) => (
						<Link className="local__card" href={`${hub.path}/${o.slug}`} key={o.slug}>
							<h3>{o.crumb}</h3>
							<p>{o.card}</p>
							<span className="local__more mono">Read more</span>
						</Link>
					))}
				</div>
				<p className="local__note">
					<Link href={hub.path}>How the free consultation works, and the areas I serve</Link>
				</p>
			</section>
		</LocalFrame>
	);
}
