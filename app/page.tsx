import AskPanel from '@/components/AskPanel';
import DayTimeline from '@/components/DayTimeline';
import SubscribeForm from '@/components/SubscribeForm';
import { answers } from '@/content/answers';
import {
	about,
	briefing,
	footer,
	hero,
	nav,
	notes,
	now,
	pullQuote,
	site,
	work,
} from '@/content/site';

/** Counts the facts still waiting on David. Dev-only banner, never shipped. */
function unfilled(): number {
	const blob = JSON.stringify({ about, now, work, footer, hero, answers });
	return (blob.match(/\[[A-Z][A-Z ,.'’-]{2,}\]/g) ?? []).length;
}

export default function Home() {
	const outstanding = unfilled();

	return (
		<>
			{process.env.NODE_ENV === 'development' && outstanding > 0 ? (
				<p className="todo-banner">
					{outstanding} unfilled facts on this page. Fill them in content/site.ts and
					content/answers.ts before launch.
				</p>
			) : null}

			<header className="wrap">
				<div className="masthead">
					<a className="masthead__name" href="#main">
						{site.name}
					</a>
					<nav className="masthead__nav" aria-label="Sections">
						{nav.map((n) => (
							<a key={n.href} href={n.href} className={n.accent ? 'accent' : undefined}>
								{n.label}
							</a>
						))}
					</nav>
				</div>
				<div className="meta-bar mono">
					<span>{site.role}</span>
					<span>{site.location}</span>
					<span>
						{site.fleetSize} agents running · last sync {site.briefingTime}
					</span>
				</div>
			</header>

			<main id="main">
				<div className="hero wrap">
					<h1>{hero.statement}</h1>
					<p>{hero.sub}</p>
				</div>

				<div className="wrap">
					<AskPanel
						questions={answers.map((a) => ({ id: a.id, question: a.question }))}
						initial={answers[0]}
					/>
				</div>

				<DayTimeline />

				<section className="about wrap" aria-labelledby="about-heading">
					<div className="about__text">
						<h2 className="section-label" id="about-heading">
							{about.heading}
						</h2>
						{about.paragraphs.map((p) => (
							<p key={p.slice(0, 24)}>{p}</p>
						))}
					</div>
					<aside className="now" aria-labelledby="now-heading">
						<h2 className="section-label" id="now-heading">
							{now.heading}
						</h2>
						<ul className="now__list">
							{now.items.map((item) => (
								<li key={item.title}>
									<div className="now__title">{item.title}</div>
									<div className="now__detail">{item.detail}</div>
								</li>
							))}
						</ul>
						<div className="now__updated">Updated {now.updated}</div>
					</aside>
				</section>

				<blockquote className="quote wrap">
					<p>{pullQuote}</p>
				</blockquote>

				<section className="notes wrap" id="notes" aria-labelledby="notes-heading">
					<div className="section-head">
						<h2 id="notes-heading">Notes</h2>
						<a href="#notes">Every post &rarr;</a>
					</div>
					{notes.map((n) => (
						<a className="note" key={n.slug} href={`#${n.slug}`}>
							<span className="note__meta">
								{n.dateLabel}
								<span className="note__topic">{n.topic}</span>
							</span>
							<span>
								<h3>{n.title}</h3>
								<p>{n.dek}</p>
							</span>
							<span className="note__time">{n.readingTime}</span>
						</a>
					))}
				</section>

				<section className="work wrap" id="work" aria-labelledby="work-heading">
					<h2 id="work-heading" style={{ fontSize: 40, fontWeight: 600 }}>
						Work
					</h2>
					<div className="work__grid">
						{work.map((w) => (
							<article className="work__card" key={w.title}>
								<p className="work__kicker mono">{w.kicker}</p>
								<h3>{w.title}</h3>
								<p>{w.body}</p>
								<p className="work__meta">{w.meta}</p>
							</article>
						))}
					</div>
				</section>

				<div className="wrap">
					<section className="briefing" id="briefing" aria-labelledby="briefing-heading">
						<div>
							<p className="briefing__kicker mono">{briefing.kicker}</p>
							<h2 id="briefing-heading">{briefing.title}</h2>
							<p>{briefing.body}</p>
						</div>
						<SubscribeForm />
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
		</>
	);
}
