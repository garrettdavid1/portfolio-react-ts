/**
 * The answers behind the "Ask about my work" panel.
 *
 * Questions a prospective client, team lead or learner actually asks, answered
 * from the record. Facts come from David's resume (2026-08). Written by hand
 * and shipped with the page: there is no model behind it and no request, and
 * the panel switches between answers locally.
 */

export type Answer = {
	id: string;
	question: string;
	body: string;
	more: string;
	/** What the claim rests on. Shown verbatim under the answer. */
	source: string;
	/** A short count or cadence, shown next to the source. */
	timing: string;
};

export const answers: Answer[] = [
	{
		id: 'build',
		question: 'Can you build my product?',
		body:
			'Yes, end to end: product decisions, front end, back end and deploy. PreDiscover went from an empty repo to a background-search platform with paying clients, cutting searches that took hours down to minutes or seconds.',
		more:
			'How long depends on the product, but expect it faster than you have seen software built, because I pair ten years of judgment with a fleet of agents. You get code you own, with the reasoning behind it written down.',
		source: 'PreDiscover, DesignStudio, Shopmonkey',
		timing: '10 years shipping',
	},
	{
		id: 'teach-ai',
		question: 'Can you teach my team to use AI well?',
		body:
			'I already do this at work. At Deque I built the AI-assisted engineering workflow the CTO turned into two org-wide template repositories, wrote the coding guidelines now used across six-plus repos, and I run AI hackathons for my teams.',
		more:
			'Sessions happen in your own codebase: what to hand an agent, how to review what comes back, and where the hard stops go. The first rule I teach is my own: nothing is working until you have read what it wrote.',
		source: 'Deque Systems',
		timing: '6+ repos',
	},
	{
		id: 'tooling',
		question: 'What does setting up the tooling involve?',
		body:
			'Three pieces: a shared context your agents read before every task, tools that let them act on your systems instead of only suggesting, and guardrails on anything that cannot be undone.',
		more:
			'It is the same setup I run my own work on every day, from task filing to deploys to a morning briefing. You get it installed and the reasoning written down, so your team can change it without me.',
		source: 'my own agent platform, in daily use',
		timing: 'daily',
	},
	{
		id: 'learn-code',
		question: 'I am new to coding. Can you teach me?',
		body:
			'Yes. I taught high school English before I wrote software professionally, and I still ship production code, so you learn from someone who does the work now.',
		more:
			'I mentored a support colleague at Shopmonkey into a full-time engineering role, wrote an internal React tutorial at MDL autoMation, and built the Shopmonkey team that trained and placed more than twenty-five engineers in three months.',
		source: 'Tucker High School, Shopmonkey, MDL autoMation',
		timing: '25+ engineers trained',
	},
	{
		id: 'shipped',
		question: 'What have you shipped?',
		body:
			'Ten years of it: enterprise SaaS at Shopmonkey, a drag-and-drop app builder at Juvare, legacy dealership systems migrated off Silverlight at MDL, and client platforms including a background-search product with paying customers.',
		more:
			'I still ship alongside an engineering-manager role: migrations to pnpm and to Datadog APM and logging, a six-PR access-import series, and platform upgrades across Fastify, Prisma, TypeScript, Node and MySQL.',
		source: 'resume, August 2026',
		timing: '5 employers',
	},
	{
		id: 'owner',
		question: 'I run a business and I am not technical. Can you help?',
		body:
			'Yes, two ways. I can teach you to use AI for the work that eats your week, in plain language and with no code, or I can build what you need so you never have to learn it.',
		more:
			'I taught high school English and ran training programs before I wrote software, so explaining this to people who do not live in it is familiar ground. I also run my own calendar, inbox and household through the same kind of tools.',
		source: 'Tucker High School, Chick-fil-A, my own daily setup',
		timing: 'no code needed',
	},
	{
		id: 'work',
		question: 'What are you like to work with?',
		body:
			'Direct, and allergic to progress theater. I would rather hear that something is broken on Tuesday than hear it is on track until Friday.',
		more:
			'I write decisions down once so they do not get re-made worse later, and I expect the same.',
		source: 'me',
		timing: 'static',
	},
];
