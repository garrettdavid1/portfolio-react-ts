/**
 * Every word on the page lives here. Filling in the facts below is the only
 * editing needed before launch — nothing in app/ or components/ carries copy.
 *
 * Anything wrapped in TODO() is an unverified fact. `npm run build` is happy
 * with them; the dev banner in app/page.tsx is not, on purpose.
 *
 * Project history recovered from the previous site (Projects.data.ts on
 * master), so the descriptions started as David's own words.
 */

export function TODO(text: string): string {
	return `[${text}]`;
}

export const site = {
	name: 'David Garrett',
	domain: 'davidgarrett.us',
	role: 'Engineering Manager, Deque Systems',
	location: 'Woodstock, Georgia',
	tagline: 'Engineering leader who still ships.',
	description:
		'Engineering manager at Deque Systems. Greenfield platforms, rewrites of systems a business already runs on, and teams that had to get faster without breaking anything.',
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
	sub: `${TODO('N')} years building software for other people: platforms taken from nothing to paying customers, legacy systems rewritten while the business kept running on them, and engineers I am accountable for. Today I manage ten-plus engineers across three teams at Deque Systems, and I keep a contract practice going so I never stop being the person who has to make it actually work.`,
};

/** The three things someone hires David for. */
export const value = {
	heading: 'What I get hired for',
	items: [
		{
			n: '01',
			title: 'Nothing to paying customers',
			body:
				'PreDiscover went from an empty repo to a background-search platform with active, paying clients: searches that took hours run in seconds. BoardStudio was greenfield too, a drag-and-drop builder for applications inside an existing product ecosystem.',
			proof: 'PreDiscover · BoardStudio',
		},
		{
			n: '02',
			title: 'Replacing what the business already runs on',
			body:
				'Two full rewrites of Silverlight apps at MDL autoMation, live in high-end car dealerships: the screens that greet guests and track their vehicles in real time, and the dispatch tool valet staff use all day. No pause in service.',
			proof: 'MDL autoMation',
		},
		{
			n: '03',
			title: 'Growing engineers, not just output',
			body:
				'I taught high school English and ran training and advancement programs before I wrote software professionally. The part of engineering management most people pick up late is the part I started with.',
			proof: 'Deque · Tucker High School · Chick-fil-A',
		},
	],
};

export const work = [
	{
		slug: 'deque',
		client: 'Deque Systems',
		title: 'Three teams on accessibility tooling',
		role: 'Engineering Manager',
		period: `${TODO('YEAR')}–present`,
		body:
			'Ten-plus engineers across API integrations, scanning and results, and accessibility program management. Platform work: the interfaces other teams depend on, and what happens when one of them breaks at two in the morning.',
		outcome: TODO('ONE MEASURABLE OUTCOME'),
		stack: 'Accessibility · axe · platform · developer experience',
	},
	{
		slug: 'prediscover',
		client: 'Versatile Development',
		title: 'PreDiscover criminal background search',
		role: 'Lead engineer, greenfield',
		period: TODO('YEARS'),
		body:
			'A platform and Chrome extension that let background-search companies automate their searches: collecting data from county-level courthouse sites, filtering cases, and submitting into case-management software.',
		outcome:
			'Searches that took hours now take minutes or seconds. Shipped with active, paying clients.',
		stack: 'React · Node · Express · MongoDB · Chrome extension',
	},
	{
		slug: 'boardstudio',
		client: 'Juvare',
		title: 'BoardStudio',
		role: 'Engineer, greenfield',
		period: TODO('YEARS'),
		body:
			'A web app for building complex applications that integrate with the WebEOC product ecosystem, giving users drag, drop and code editing in one surface.',
		outcome: TODO('WHAT IT CHANGED FOR JUVARE OR ITS USERS'),
		stack: 'React · TypeScript · GrapesJS · Monaco Editor',
	},
	{
		slug: 'mdl',
		client: 'MDL autoMation',
		title: 'Flatscreen and Dispatch rewrites',
		role: 'Full-stack engineer',
		period: TODO('YEARS'),
		body:
			'Two Silverlight apps rebuilt on current technology without interrupting the dealerships running on them. One greets guests on large screens and tracks vehicles in real time from in-car devices; the other is how valet and service staff locate and deliver a customer’s car.',
		outcome: TODO('WHAT THE REWRITE UNBLOCKED'),
		stack: 'KnockoutJS · C#/.NET Web API · SignalR · MongoDB · React Native',
	},
	{
		slug: 'modzy',
		client: 'Modzy',
		title: 'MLOps web app',
		role: 'Front-end engineer',
		period: TODO('YEARS'),
		body:
			'Data visualisation over large datasets, pixel-accurate UI components, and the documentation for each of them, on a machine-learning operations platform.',
		outcome: TODO('WHAT IT CHANGED'),
		stack: 'React · TypeScript · D3.js',
	},
	{
		slug: 'agent-platform',
		client: 'Personal',
		title: 'A personal agent platform',
		role: 'Sole engineer',
		period: '2025–present',
		body:
			'Self-hosted app, API, scheduler and MCP server that runs my own working life: agents file tasks, urgent ones push to my phone, and a briefing lands every morning. It is where I learn what building with agents actually costs.',
		outcome:
			'In daily use. It is the reason I can lead three teams and still hold a contract practice.',
		stack: 'TypeScript · Postgres · Railway · Web Push · MCP',
	},
];

/**
 * The arc, drawn as an engraved instrument. Markers are evenly spaced for now;
 * once real years land in `year`, the axis can be made proportional.
 */
export const record = {
	heading: 'The arc',
	intro:
		'I did not start in software. The first half of this list is a large part of why I am useful in the second half.',
	roles: [
		{
			org: 'Tucker High School',
			role: 'English teacher',
			year: TODO('YR'),
			note: 'Preparing a lesson, and mentoring with care.',
			side: 'above' as const,
		},
		{
			org: 'Chick-fil-A',
			role: 'Training director',
			year: TODO('YR'),
			note: 'Built the training and advancement programs.',
			side: 'below' as const,
		},
		{
			org: 'MDL autoMation',
			role: 'Full-stack engineer',
			year: TODO('YR'),
			note: 'Two production rewrites of real-time systems.',
			side: 'above' as const,
		},
		{
			org: 'Versatile Development',
			role: 'Contract engineer',
			year: TODO('YR'),
			note: 'PreDiscover, WeatherStrike, portals for Toc and Earth Guardians.',
			side: 'below' as const,
		},
		{
			org: 'Juvare, then Modzy',
			role: 'Product engineer',
			year: TODO('YR'),
			note: 'Greenfield builder, then MLOps data visualisation.',
			side: 'above' as const,
		},
		{
			org: 'Deque Systems',
			role: 'Engineering manager',
			year: TODO('YR'),
			note: 'Three teams. Accountable for people, not only code.',
			side: 'below' as const,
		},
	],
};

export const how = {
	heading: 'How I work now',
	intro:
		'Most of the code I ship is written by an agent, so the job moved to knowing which parts to distrust. This is not a hobby. It is why the work above is possible alongside a full-time management role.',
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
	line: 'Woodstock, Georgia. Dad of four. Usually building something.',
	links: [
		{ label: 'LinkedIn', href: TODO('LINKEDIN URL') },
		{ label: 'GitHub', href: TODO('GITHUB URL') },
		{ label: 'Email', href: TODO('MAILTO') },
		{ label: 'The briefing agent', href: '/briefing' },
	],
};
