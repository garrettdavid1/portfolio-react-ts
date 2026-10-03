import Link from 'next/link';
import Mark from '@/components/Mark';
import ContactForm from '@/components/ContactForm';
import { footer, site } from '@/content/site';
import { county, hub } from '@/content/woodstock';

/** Masthead, contact band and footer shared by the Woodstock pages. */
export default function LocalFrame({
	crumbs,
	contactTitle,
	schema,
	children,
}: {
	crumbs: { name: string; path: string }[];
	contactTitle: string;
	schema: object[];
	children: React.ReactNode;
}) {
	return (
		<>
			<header className="wrap">
				<div className="masthead">
					<Link className="masthead__name" href="/">
						<Mark size={34} />
						{site.name}
					</Link>
					<nav className="masthead__nav" aria-label="Sections">
						<Link href={hub.path}>Woodstock services</Link>
						<Link href="/#work">Track record</Link>
						<a href="#contact" className="accent">
							Work with me
						</a>
					</nav>
				</div>
				<div className="meta-bar mono">
					<span>Woodstock, Georgia</span>
					<span>Serving {county}</span>
				</div>
				<nav className="crumbs mono" aria-label="Breadcrumb">
					{crumbs.map((c, i) =>
						i < crumbs.length - 1 ? (
							<span key={c.path}>
								<Link href={c.path}>{c.name}</Link>
								<span aria-hidden="true"> / </span>
							</span>
						) : (
							<span key={c.path} aria-current="page">
								{c.name}
							</span>
						),
					)}
				</nav>
			</header>

			<main id="main">
				{children}

				<div className="wrap">
					<section className="briefing" id="contact" aria-labelledby="contact-heading">
						<div>
							<p className="briefing__kicker mono">{hub.contact.kicker}</p>
							<h2 id="contact-heading">{contactTitle}</h2>
							<p>{hub.contact.body}</p>
						</div>
						<ContactForm topic="woodstock" />
					</section>
				</div>
			</main>

			<footer className="footer wrap">
				<div>
					<div className="footer__name">{site.name}</div>
					<div className="footer__line">{footer.line}</div>
				</div>
				<div className="footer__links">
					{footer.links.map((l) => (
						<a key={l.label} href={l.href}>
							{l.label}
						</a>
					))}
				</div>
			</footer>

			{schema.map((s, i) => (
				<script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
			))}
		</>
	);
}
