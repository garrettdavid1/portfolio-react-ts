/**
 * Every word on the page lives here. Filling in the facts below is the only
 * editing needed before launch — nothing in app/ or components/ carries copy.
 *
 * Anything still wrapped in TODO() is an unverified fact. `npm run build` is
 * happy with them; the dev banner in app/page.tsx is not, on purpose.
 */

export const TODO_MARK = '⦙'; // a small marker so placeholders are greppable

export function TODO(text: string): string {
	return `[${text}]`;
}

export const site = {
	name: 'David Garrett',
	domain: 'davidgarrett.us',
	role: 'Engineering Manager, Deque Systems',
	location: 'Woodstock, Georgia',
	tagline:
		'Engineering manager who builds with agents, and checks what they wrote.',
	description:
		'I lead three engineering teams and run the rest of my work through a fleet of AI agents I built. Notes on building with them, and on verifying what they produce.',
	fleetSize: 11,
	briefingTime: '06:15 ET',
};

export const nav = [
	{ href: '#ask', label: 'Ask my system' },
	{ href: '#notes', label: 'Notes' },
	{ href: '#work', label: 'Work' },
	{ href: '#briefing', label: 'The briefing agent', accent: true },
];

export const hero = {
	statement: [
		`I have been shipping software for ${TODO('N')} years.`,
		'For the last two, most of the code I ship was written by an agent,',
		'and the job became knowing which parts to distrust.',
	].join(' '),
	sub:
		'I lead three engineering teams by day. The rest of my time runs through a fleet of agents I built: they hold my projects, file my work, deploy my code and draft my writing. Below is the system itself. You can interrogate it.',
};

export const day = {
	title: 'One ordinary Tuesday',
	intro:
		'Everything below happened without me opening a terminal. The two marked in rust are the ones the system refused to do on its own.',
	// `pos` is the fraction along the 05:00-23:00 axis, used on wide screens only.
	events: [
		{
			time: '06:15',
			pos: 0.069,
			side: 'above' as const,
			held: false,
			text: 'Briefing lands: the day, and what is at risk.',
		},
		{
			time: '08:40',
			pos: 0.204,
			side: 'below' as const,
			held: true,
			label: 'HELD FOR ME',
			text: 'An agent wanted to email a new contact. It filed a task instead.',
		},
		{
			time: '11:20',
			pos: 0.352,
			side: 'above' as const,
			held: false,
			text: 'Contract ticket implemented, deployed, verified live.',
		},
		{
			time: '14:05',
			pos: 0.505,
			side: 'below' as const,
			held: true,
			label: 'BLOCKED',
			text:
				'An outbound message tripped the detector for writing that sounds like a bot.',
		},
		{
			time: '19:30',
			pos: 0.806,
			side: 'above' as const,
			held: false,
			text: "Three posts drafted from the week's commits.",
		},
		{
			time: '21:00',
			pos: 0.889,
			side: 'below' as const,
			held: false,
			text: "Memory committed and pushed. Tomorrow's agents inherit today.",
		},
	],
	hours: ['05:00', '08:00', '11:00', '14:00', '17:00', '20:00', '23:00'],
};

export const about = {
	heading: 'What I actually do',
	paragraphs: [
		'At Deque Systems I manage ten-plus engineers across three teams working on accessibility tooling: API integrations, scanning and results, and the program-management side. The work is platform work. Reliability, interfaces other teams depend on, and the unglamorous question of what happens when something breaks at two in the morning.',
		'Outside that I keep a second practice running, deliberately, so I stay close to the code. A contract engagement, products of my own, and the agent system that ties all of it together. Everything I write here comes out of one of those, not out of a conference talk.',
		`Before Deque: ${TODO('PRIOR ROLES AND COMPANIES, ONE LINE')}. Dad of four, based near Atlanta.`,
	],
};

export const now = {
	heading: 'Now',
	updated: TODO('MONTH YEAR'),
	items: [
		{
			title: 'Leading three teams at Deque',
			detail: 'Accessibility tooling, platform side',
		},
		{
			title: `Running a ${site.fleetSize}-agent fleet`,
			detail: 'Briefings, task filing, deploys, review',
		},
		{
			title: 'Writing three times a week',
			detail: 'On agents, verification and judgment',
		},
		{
			title: TODO('WHAT YOU ARE BUILDING THIS MONTH'),
			detail: TODO('ONE LINE'),
		},
	],
};

export const pullQuote =
	'“N records created” is a count, not a result. An automation is not working until I have read what it wrote.';

export const notes = [
	{
		slug: 'four-records',
		date: '2026-09-18',
		dateLabel: '18 SEP 2026',
		topic: 'Verification',
		readingTime: '4 min read',
		title: 'My automation reported four records created. All four were wrong.',
		dek:
			'The script ran clean. No errors, the right count, green all the way down, and every value it wrote was wrong. This matters more now that AI writes so much of our glue code, because agents are good at producing something that runs. Running is the low bar.',
	},
	{
		slug: 'shared-memory',
		date: '2026-09-18',
		dateLabel: '18 SEP 2026',
		topic: 'Agent design',
		readingTime: '5 min read',
		title: 'Every lesson one of my agents learns, all of them keep.',
		dek:
			'I kept fixing the same mistake in different projects, so I built a shared engineering context every agent reads before it starts. Now they make new mistakes instead of old ones. Teams work the same way.',
	},
	{
		slug: 'not-a-chatbot-tab',
		date: '2026-09-18',
		dateLabel: '18 SEP 2026',
		topic: 'Systems',
		readingTime: '6 min read',
		title: 'I run most of my life through AI agents. Not a chatbot tab. A system.',
		dek:
			'One repo is the operating manual every agent reads. A task app I built lets them file work that buzzes my phone. A morning briefing tells me what is on the day and what is at risk. I spend my time on decisions, not logistics.',
	},
];

export const work = [
	{
		kicker: 'BUILT AND RUNNING',
		title: 'A personal agent platform',
		body:
			'Self-hosted app, API, scheduler and MCP server. Agents create tasks, the urgent ones push to my phone, and a briefing lands every morning at quarter past six.',
		meta: 'TypeScript · Postgres · Railway · Web Push',
	},
	{
		kicker: 'DAY JOB',
		title: 'Deque Systems',
		body: `Managing three teams on accessibility tooling: API integrations, scanning and results, and program management. ${TODO('ONE OUTCOME WORTH NAMING')}.`,
		meta: `${TODO('YEAR')}–PRESENT`,
	},
	{
		kicker: 'CONTRACT',
		title: TODO('CLIENT ENGAGEMENT'),
		body: TODO('WHAT IT IS, WHAT YOU OWN, THE RESULT IN ONE SENTENCE'),
		meta: TODO('STACK'),
	},
	{
		kicker: 'EARLIER',
		title: TODO('PRIOR ROLE'),
		body: TODO('THE ONE THING FROM THIS ROLE STILL WORTH TELLING SOMEONE IN 2026'),
		meta: TODO('YEARS'),
	},
];

export const briefing = {
	kicker: 'FREE · ABOUT FIFTEEN MINUTES TO INSTALL',
	title: 'The morning briefing agent I use every day',
	body:
		'It reads your calendar and your inbox before you wake up and sends one short plan for the day. Yours to keep and to change. I send it, and then I write to you about once a fortnight.',
	cta: 'Send it to me',
	fineprint: 'One email with the thing in it. Unsubscribe whenever.',
};

export const footer = {
	line: 'Woodstock, Georgia. Dad of four. Usually writing something.',
	links: [
		{ label: 'LinkedIn', href: TODO('LINKEDIN URL') },
		{ label: 'GitHub', href: TODO('GITHUB URL') },
		{ label: 'Email', href: TODO('MAILTO') },
	],
};
