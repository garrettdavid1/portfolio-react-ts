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
	role: 'Engineering Manager, Deque Systems',
	location: 'Atlanta, Georgia',
	tagline: 'Engineering leader who still ships.',
	description:
		'Engineering manager at Deque Systems: thirteen engineers across three teams, and production code alongside it. Greenfield platforms, legacy systems replaced under load, and the systems an engineering org runs on.',
};

export const nav = [
	{ href: '#work', label: 'Work' },
	{ href: '#record', label: 'The arc' },
	{ href: '#ask', label: 'Ask about my work' },
	{ href: '#notes', label: 'Notes' },
	{ href: '#contact', label: 'Get in touch', accent: true },
];

export const hero = {
	statement:
		'I lead engineering teams, and I still ship the code myself. Both halves are the job now.',
	sub: 'Ten years of full-stack work, now managing thirteen engineers across three product teams inside a forty-engineer organization. I build the systems an engineering org runs on, delivery measurement, review cycles, the AI workflows underneath them, and I have never gone a stretch without something of my own being built alongside it.',
};

/** The three things someone hires David for. */
export const value = {
	heading: 'What I get hired for',
	items: [
		{
			n: '01',
			title: 'Making a team faster without adding people',
			body:
				'Keeping engineers on their top priorities, holding the bar on accountability, and building the incentive and motivation that let a team rally around a quarter. The measurement work underneath it means the change is visible rather than claimed.',
			proof: 'Deque Systems',
		},
		{
			n: '02',
			title: 'Replacing what the business already runs on',
			body:
				'Legacy Silverlight applications migrated onto modern JavaScript at MDL autoMation while dealerships kept running on them. At Shopmonkey I was the sole engineer holding version one up for roughly six thousand auto shops while version two was built.',
			proof: 'MDL autoMation · Shopmonkey',
		},
		{
			n: '03',
			title: 'Building the layer a whole org runs on',
			body:
				'Delivery measurement in DX now covering ten teams, plus the reporting methodology used across engineering. Quarterly performance reviews automated end to end, and an AI-assisted engineering operating system productized at the CTO’s request into two org-wide template repositories.',
			proof: 'Deque Systems',
		},
	],
};

export const work = [
	{
		slug: 'deque',
		client: 'Deque Systems',
		title: 'Thirteen engineers, three teams, and the org’s delivery layer',
		role: 'Software Engineering Manager, previously Technical Lead',
		period: 'June 2024 – present',
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
		period: 'July 2021 – June 2024',
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
		period: 'September 2019 – July 2021',
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
		period: 'February 2018 – June 2023',
		body:
			'Web applications built outside my day job, from startup products to internal enterprise tools: admin portals, data-visualization dashboards, documented component libraries, and junior developers mentored into the industry. The largest was PreDiscover, a criminal-background-search platform and Chrome extension that pulled data from county-level courthouse sites, filtered cases and submitted into case-management software.',
		outcome:
			'PreDiscover turned searches that took hours into minutes or seconds, and shipped with paying clients using it.',
		stack: 'React · Node · Express · MongoDB · Chrome extension',
	},
	{
		slug: 'mdl',
		client: 'MDL autoMation',
		title: 'Getting the dealerships off Silverlight',
		role: 'Software Developer',
		period: 'April 2017 – September 2019',
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
		period: '2025 – present',
		body:
			'Self-hosted app, API, scheduler and MCP server that runs my own working life: agents file tasks, the urgent ones push to my phone, and a briefing lands every morning. It is where I learn what building with agents actually costs before I recommend it to anyone.',
		outcome:
			'In daily use. It is the reason a full-time management job still leaves room to build.',
		stack: 'TypeScript · Postgres · Railway · Web Push · MCP',
	},
];

/**
 * The arc, drawn as an engraved axis. `pos` is the fraction along an axis that
 * runs April 2017 to late 2026, so the spacing is real. `span` is the rust
 * stretch marking the years the freelance work ran alongside a full-time job.
 */
export const record = {
	heading: 'The arc',
	intro:
		'Before software I taught high school English and ran training and advancement programs at Chick-fil-A. That is where the management half came from. The rust stretch of the line is VersaDev, my own freelance work, running alongside a full-time job for five of these years.',
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
		'Most of the code I ship is written by an agent, so the job moved to knowing which parts to distrust. At work this became an AI-assisted operating system productized at the CTO’s request into two org-wide template repositories, and the coding guidelines adopted across six-plus repos.',
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

export const contact = {
	kicker: 'OPEN TO THE RIGHT CONVERSATION',
	title: 'What are you trying to ship?',
	body:
		'A platform to build, a system nobody wants to touch, or a team that needs to get faster without breaking things. Tell me about it. I answer my own email.',
	cta: 'Start a conversation',
	fineprint: 'Or find me on LinkedIn. I reply there too.',
};

export const footer = {
	line: 'Atlanta, Georgia. Dad of four. Fluent in Brazilian Portuguese. Usually building something.',
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidthed3v/' },
		{ label: 'GitHub', href: 'https://github.com/garrettdavid1' },
		{ label: 'Email', href: 'mailto:davidgarrettcoding@gmail.com' },
		{ label: 'The briefing agent', href: '/briefing' },
	],
};
