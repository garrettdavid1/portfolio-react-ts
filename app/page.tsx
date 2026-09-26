import AskPanel from '@/components/AskPanel';
import CareerArc from '@/components/CareerArc';
import Companion from '@/components/Companion';
import LiveMark from '@/components/LiveMark';
import Mark from '@/components/Mark';
import ContactForm from '@/components/ContactForm';
import { answers } from '@/content/answers';
import { getActivity } from '@/lib/activity';
import {
	agent,
	contact,
	footer,
	hero,
	how,
	live,
	nav,
	notes,
	record,
	site,
	value,
	work,
} from '@/content/site';

/** Counts the facts still waiting on David. Dev-only banner, never shipped. */
function unfilled(): number {
	const blob = JSON.stringify({ hero, value, work, record, footer, answers });
	return (blob.match(/\[[A-Z][A-Z ,.'’-]{1,}\]/g) ?? []).length;
}

/** The live counts refresh hourly at most; the page is otherwise static. */
export const revalidate = 3600;

export default async function Home() {
	const outstanding = unfilled();
	const activity = await getActivity();
	const lines = activity
		? agent.lines.map((l) => (l.section === 'work' && live.agentLine(activity) ? { ...l, text: live.agentLine(activity) } : l))
		: agent.lines;

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
						<Mark size={34} />
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
					<span>{site.location}</span>
					<span>Building software since {record.roles[0].year}</span>
					{activity && live.metaLine(activity) ? (
						<span className="meta-bar__live">
							<span className="live-dot" aria-hidden="true" />
							{live.metaLine(activity)}
						</span>
					) : null}
				</div>
			</header>

			<main id="main">
				<div className="hero wrap">
					<div className="hero__mark" id="hero-mark">
						<LiveMark size="100%" />
					</div>
					<h1>{hero.statement}</h1>
					<p>{hero.sub}</p>
					<div className="hero__actions">
						<a className="btn btn--solid" href="#offers">
							What I offer
						</a>
						<a className="btn btn--ghost" href="#contact">
							Work with me
						</a>
					</div>
				</div>

				{/* the offers */}
				<section className="value wrap" id="offers" aria-labelledby="value-heading">
					<h2 className="section-label" id="value-heading">
						{value.heading}
					</h2>
					<div className="value__grid">
						{value.items.map((v) => (
							<article className="value__item" key={v.n}>
								<p className="value__n mono">{v.n}</p>
								<h3>{v.title}</h3>
								<p className="value__who">{v.who}</p>
								<p className="value__body">{v.body}</p>
								<p className="value__proof mono">{v.proof}</p>
							</article>
						))}
					</div>
				</section>

				{/* the projects themselves */}
				<section className="work wrap" id="work" aria-labelledby="work-heading">
					<div className="section-head">
						<h2 id="work-heading">Track record</h2>
						<p className="work__note">
							Six of them. Each one went live and somebody depended on it.
						</p>
					</div>
					{work.map((w) => (
						<article className="case" key={w.slug}>
							<div className="case__aside">
								<p className="case__client">{w.client}</p>
								<p className="case__period mono">{w.period}</p>
								<p className="case__role">{w.role}</p>
							</div>
							<div className="case__main">
								<h3>{w.title}</h3>
								<p className="case__body">{w.body}</p>
								{w.outcome && <p className="case__outcome">{w.outcome}</p>}
								<p className="case__stack mono">{w.stack}</p>
							</div>
						</article>
					))}
				</section>

				<CareerArc />

				<div className="wrap">
					<AskPanel answers={answers} />
				</div>

				{/* how, kept short and kept below the proof */}
				<section className="how wrap" aria-labelledby="how-heading">
					<div className="how__intro">
						<h2 className="section-label" id="how-heading">
							{how.heading}
						</h2>
						<p>{how.intro}</p>
					</div>
					<div className="how__grid">
						{how.points.map((p) => (
							<div className="how__point" key={p.title}>
								<h3>{p.title}</h3>
								<p>{p.body}</p>
							</div>
						))}
					</div>
				</section>

				<section className="notes wrap" id="notes" aria-labelledby="notes-heading">
					<div className="section-head">
						<h2 id="notes-heading">Notes</h2>
						<a href={site.linkedin} target="_blank" rel="noreferrer">
							Read these on LinkedIn &rarr;
						</a>
					</div>
					{notes.map((n) => (
						<article className="note" key={n.slug}>
							<span className="note__meta">
								{n.dateLabel}
								<span className="note__topic">{n.topic}</span>
							</span>
							<span>
								<h3>{n.title}</h3>
								<p>{n.dek}</p>
							</span>
							<span className="note__time">{n.readingTime}</span>
						</article>
					))}
				</section>

				<div className="wrap">
					<section className="briefing" id="contact" aria-labelledby="contact-heading">
						<div>
							<p className="briefing__kicker mono">{contact.kicker}</p>
							<h2 id="contact-heading">{contact.title}</h2>
							<p>{contact.body}</p>
						</div>
						<ContactForm />
					</section>
				</div>
			</main>

			<Companion lines={lines} anchorId="hero-mark" />

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
