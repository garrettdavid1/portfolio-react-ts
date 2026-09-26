/**
 * Every word on the page lives here. Filling in the facts below is the only
 * editing needed before launch — nothing in app/ or components/ carries copy.
 *
 * Anything wrapped in TODO() is an unverified fact. `npm run build` is happy
 * with them; the dev banner in app/page.tsx is not, on purpose.
 *
 * Source of record: David's resume (2026-08), plus project descriptions
 * recovered from the previous site. Where the two disagreed the resume won.
 */

export function TODO(text: string): string {
	return `[${text}]`;
}

export const site = {
	name: 'David Garrett',
	domain: 'davidgarrett.us',
	linkedin: 'https://www.linkedin.com/in/davidthed3v/recent-activity/all/',
	location: 'Atlanta, Georgia',
	tagline: 'I build software, and I teach people to build it with AI.',
	description:
		'Software engineer and engineering manager. I build what people need, and I teach business owners, engineering teams and new developers to use AI and to code.',
};

export const nav = [
	{ href: '#offers', label: 'What I offer' },
	{ href: '#work', label: 'Track record' },
	{ href: '#ask', label: 'Questions' },
	{ href: '#notes', label: 'Notes' },
	{ href: '#contact', label: 'Work with me', accent: true },
];

export const hero = {
	statement:
		'I build software, and I teach people to build it with AI.',
	sub: 'Ten years as a software engineer and engineering manager. I pair that judgment with a fleet of agents to ship in days what used to take quarters. I build what people need, and I teach business owners, engineering teams and new developers to work the same way.',
};

/** The three things someone hires David for. */
/** What David offers, each with who it is for and the proof behind it. */
export const value = {
	heading: 'What I offer',
	items: [
		{
			n: '01',
			title: 'Have something built',
			who: 'For business owners, founders and teams who need something built and would rather not learn how.',
			body:
				'I build the whole thing: product, front end, back end and deploy. Ten years of judgment paired with a fleet of agents means work that used to take a quarter takes weeks, and the judgment is what keeps that speed from turning into a rewrite later.',
			proof: 'PreDiscover went from an empty repo to paying clients. Also DesignStudio at Juvare and enterprise SaaS at Shopmonkey.',
		},
		{
			n: '02',
			title: 'Use AI in your business',
			who: 'For business owners and non-technical people who want the time back without learning to code.',
			body:
				'Plain-language training on putting AI to work where your week goes: email, scheduling, writing, research and the repetitive admin. No code. If you would rather skip the learning, I build it for you instead.',
			proof: 'I taught high school English and ran training programs at Chick-fil-A, and I run my own calendar, inbox and household through the same kind of tools I would show you.',
		},
		{
			n: '03',
			title: 'Teach your engineering team to work with AI',
			who: 'For engineering teams and managers who have the tools and not yet the results.',
			body:
				'Hands-on sessions in your own codebase: what to hand an agent, how to review what comes back, and where the hard stops go so nothing irreversible happens unchecked.',
			proof: 'At Deque I built the AI-assisted engineering workflow the CTO had turned into org-wide templates, and wrote the coding guidelines now used across six-plus repos.',
		},
		{
			n: '04',
			title: 'Set up the tooling',
			who: 'For teams that want AI wired into how they already work.',
			body:
				'A shared context your agents read before every task, tools that let them act on your systems, and guardrails on anything that cannot be undone. You get the setup and the reasoning behind each piece, written down.',
			proof: 'The same setup runs my own work every day: tasks, deploys and a morning briefing.',
		},
		{
			n: '05',
			title: 'Learn to code',
			who: 'For people starting out or switching careers, and engineers ready for the next level.',
			body:
				'One-on-one mentoring from someone who taught high school English before writing software, and still ships production code.',
			proof: 'Mentored a support colleague into a full-time engineering role, wrote MDL\u2019s internal React tutorial, and built the Shopmonkey team that trained and placed more than twenty-five engineers in three months.',
		},
	],
};

export const work = [
	{
		slug: 'deque',
		client: 'Deque Systems',
		title: 'Thirteen engineers, three teams, and the org’s delivery layer',
		role: 'Software Engineering Manager, previously Technical Lead',
		period: 'June 2024 to present',
		body:
			'Three product teams (API Integrations, Scan and Results, Bandura) inside a forty-engineer organization. The teams build and maintain axe-core, Axe Watcher, Axe Linter, the DevTools CLI, Developer Hub, Axe Reports and Axe Monitor. Alongside the management work: a Datadog APM and logging migration, a six-PR access-import series, and platform upgrades across Fastify, Prisma, TypeScript, Node and MySQL.',
		outcome:
			'Built the delivery-measurement layer the organization runs on, now covering ten teams, and automated the management layer itself: quarterly reviews end to end, per-report status pages, 1:1 prep and the weekly staff report.',
		stack: 'TypeScript · Node · React · Postgres · MySQL · Prisma · DX',
	},
	{
		slug: 'shopmonkey',
		client: 'Shopmonkey',
		title: 'Enterprise SaaS, version one and version two',
		role: 'Senior Software Engineer, then Engineering Lead',
		period: 'July 2021 to June 2024',
		body:
			'Led a team of four senior engineers across both platforms, and built the strategic "farm" team that interviewed, trained, onboarded and placed more than twenty-five engineers across the org in three months.',
		outcome:
			'Average Jira ticket age cut from over 130 days to 27. Sole engineer supporting version one for roughly six thousand auto shops during the version-two build. Mentored a support colleague into a full-time engineering role.',
		stack: 'TypeScript · Node · React · Postgres · MongoDB',
	},
	{
		slug: 'juvare',
		client: 'Juvare',
		title: 'DesignStudio',
		role: 'Software Engineer and Scrum Master',
		period: 'September 2019 to July 2021',
		body:
			'Architected the front end and the testing suite for DesignStudio, a new enterprise application, and managed offshore contractors delivering FormStudio. Also on WebEOC enhancements, defects and deployment through Azure and Jenkins.',
		outcome: 'FormStudio delivered on time with a distributed contract team.',
		stack: 'TypeScript · React · ASP.NET · Azure · Jenkins',
	},
	{
		slug: 'versadev',
		client: 'VersaDev, LLC',
		title: 'Building outside the day job',
		role: 'Owner, freelance',
		period: 'February 2018 to June 2023',
		body:
			'Web applications built outside my day job, from startup products to internal enterprise tools: admin portals, data-visualization dashboards and documented component libraries. The largest was PreDiscover, a criminal-background-search platform and Chrome extension that pulled data from county-level courthouse sites, filtered cases and submitted into case-management software.',
		outcome:
			'PreDiscover turned searches that took hours into minutes or seconds, and shipped with paying clients using it.',
		stack: 'React · Node · Express · MongoDB · Chrome extension',
	},
	{
		slug: 'mdl',
		client: 'MDL autoMation',
		title: 'Getting the dealerships off Silverlight',
		role: 'Software Developer',
		period: 'April 2017 to September 2019',
		body:
			'Migrated legacy applications away from Silverlight onto modern JavaScript, live in high-end car dealerships: the screens that greet guests and track vehicles in real time, and the dispatch tool valet staff use all day. Also a React Native mobile app for service advisors.',
		// No verified outcome line for this one yet; the case renders without it.
		outcome: '',
		stack: 'KnockoutJS · C#/.NET Web API · SignalR · MongoDB · React Native',
	},
	{
		slug: 'agent-platform',
		client: 'Personal',
		title: 'A personal agent platform',
		role: 'Sole engineer',
		period: '2025 to present',
		body:
			'Self-hosted app, API, scheduler and MCP server that runs my own working life: agents file tasks, the urgent ones push to my phone, and a briefing lands every morning. It is where I learn what building with agents costs before I recommend it to anyone.',
		outcome:
			'In daily use. It is the reason a full-time management job still leaves room to build.',
		stack: 'TypeScript · Postgres · Railway · Web Push · MCP',
	},
];

/**
 * The arc, drawn as an engraved axis. `pos` is the fraction along an axis that
 * runs April 2017 to late 2026, so the spacing is real. `span` is the orange
 * stretch marking the years the freelance work ran alongside a full-time job.
 */
export const record = {
	heading: 'The arc',
	intro:
		'Before software I taught high school English and ran training and advancement programs at Chick-fil-A. That is where I learned to teach. The orange stretch of the line is VersaDev, my own freelance work, running alongside a full-time job for five of these years.',
	span: { from: 0.087, to: 0.647 },
	axisLabels: [
		{ label: '2017', pos: 0 },
		{ label: '2020', pos: 0.289 },
		{ label: '2023', pos: 0.605 },
		{ label: '2026', pos: 0.921 },
	],
	roles: [
		{
			org: 'MDL autoMation',
			role: 'Software developer',
			year: '2017',
			pos: 0,
			note: 'Legacy apps off Silverlight, without stopping the dealerships.',
			side: 'above' as const,
		},
		{
			org: 'Juvare',
			role: 'Engineer, scrum master',
			year: '2019',
			pos: 0.255,
			note: 'Front end and test suite for a new enterprise app.',
			side: 'below' as const,
		},
		{
			org: 'Shopmonkey',
			role: 'Senior engineer, then lead',
			year: '2021',
			pos: 0.447,
			note: 'A team of four senior engineers across two platforms.',
			side: 'above' as const,
		},
		{
			org: 'Deque Systems',
			role: 'Tech lead, then manager',
			year: '2024',
			pos: 0.755,
			note: 'Thirteen reports, three teams, a forty-engineer org.',
			side: 'below' as const,
		},
	],
};

export const how = {
	heading: 'How I work now',
	intro:
		'Most of the code I ship is written by an agent, so the job moved to knowing which parts to distrust. At work that became the coding guidelines now used across six-plus repos.',
	points: [
		{
			title: 'A count is not a result.',
			body:
				'One of my own automations reported four records created. All four were wrong and the run was green. Nothing is working until I have read what it wrote.',
		},
		{
			title: 'Write the decision down once.',
			body:
				'Agents and teams both re-make undocumented decisions, usually worse. My agents share one written context. So should a team.',
		},
		{
			title: 'Autonomy with hard stops.',
			body:
				'Anything reversible happens without asking. Money, contracts and first contact with a person come back to me. The same rule I would set for a new engineer.',
		},
	],
};

export const notes = [
	{
		slug: 'four-records',
		dateLabel: '18 SEP 2026',
		topic: 'Verification',
		readingTime: '4 min read',
		title: 'My automation reported four records created. All four were wrong.',
		dek:
			'The script ran clean. No errors, the right count, green all the way down, and every value it wrote was wrong. Agents are good at producing something that runs. Running is the low bar.',
	},
	{
		slug: 'shared-memory',
		dateLabel: '18 SEP 2026',
		topic: 'Agent design',
		readingTime: '5 min read',
		title: 'Every lesson one of my agents learns, all of them keep.',
		dek:
			'I kept fixing the same mistake in different projects, so I built a shared context every agent reads before it starts. Now they make new mistakes instead of old ones. Teams work the same way.',
	},
	{
		slug: 'not-a-chatbot-tab',
		dateLabel: '18 SEP 2026',
		topic: 'Systems',
		readingTime: '6 min read',
		title: 'I run most of my life through AI agents. Not a chatbot tab. A system.',
		dek:
			'One repo is the operating manual every agent reads. A task app I built lets them file work that buzzes my phone. I spend my time on decisions, not logistics.',
	},
];

/**
 * The bot that follows the reader down the page speaks as one of David's
 * agents, so it refers to him in the third person. One line per section id.
 */
export const agent = {
	name: "David's agent",
	lines: [
		{ section: 'offers', text: 'Not sure which one fits? Email him. He will tell you plainly.' },
		{ section: 'work', text: 'Every one of these went live.' },
		{ section: 'record', text: 'The orange stretch is the freelance years, on nights and weekends.' },
		{ section: 'ask', text: 'Pick a question. Every answer comes from his record.' },
		{ section: 'contact', text: 'He reads these himself. I only keep his calendar.' },
	],
};

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

/** Wording for the live counts. Every number comes from lib/activity.ts. */
export const live = {
	/** The line under the masthead, first person. */
	metaLine(a: { windowDays: number; tasksFiledByAgents?: number; handedToDavid?: number; tasksClosed?: number }) {
		const parts = [`Past ${a.windowDays} days`, `my agents filed ${plural(a.tasksFiledByAgents ?? 0, 'task')}`];
		if (a.handedToDavid !== undefined) parts.push(`${a.handedToDavid} needed me`);
		if (a.tasksClosed !== undefined) parts.push(`${a.tasksClosed} closed`);
		return parts.join(' · ');
	},
	/** What the bot says at the track record, in the agent's voice. */
	agentLine(a: { windowDays: number; tasksFiledByAgents?: number; handedToDavid?: number; tasksClosed?: number }) {
		const filed = `In the past ${a.windowDays} days I filed ${plural(a.tasksFiledByAgents ?? 0, 'task')} for David.`;
		if (a.handedToDavid !== undefined) return `${filed} ${a.handedToDavid} needed his call.`;
		if (a.tasksClosed !== undefined) return `${filed} ${a.tasksClosed} are already closed.`;
		return filed;
	},
};

export const contact = {
	kicker: 'OPEN TO THE RIGHT CONVERSATION',
	title: 'What are you trying to ship?',
	body:
		'Something to build, AI you want working in your business, a team to train, tooling to set up, or code you want to learn. Tell me about it. I answer my own email.',
	cta: 'Start a conversation',
	fineprint: 'Or find me on LinkedIn. I reply there too.',
};

export const footer = {
	line: 'Atlanta, Georgia. Dad of four. Fluent in Brazilian Portuguese. Usually building something.',
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidthed3v/' },
		{ label: 'GitHub', href: 'https://github.com/garrettdavid1' },
		{ label: 'Email', href: 'mailto:davidgarrettcoding@gmail.com' },
	],
};
