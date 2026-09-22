/**
 * The answers behind the "Ask about my work" panel.
 *
 * Questions a hiring manager or a prospective client actually asks, answered
 * from the record rather than from process talk. Facts come from David's
 * resume (2026-08). Written by hand and shipped with the page, so the
 * panel is a curated index. There is no model behind it and no request: the
 * answers ship in the page and the panel switches between them locally.
 */

export type Answer = {
	id: string;
	question: string;
	body: string;
	more: string;
	/** What the claim rests on. Shown verbatim under the answer. */
	source: string;
	/** Retrieval cost, shown next to the source. Honest, not decorative. */
	timing: string;
};

export const answers: Answer[] = [
	{
		id: 'shipped',
		question: 'What has he shipped?',
		body:
			'Ten years of it: enterprise SaaS at Shopmonkey, a new enterprise application at Juvare, legacy dealership systems migrated off Silverlight at MDL, and client platforms built outside the day job, the largest being a background-search product with paying customers.',
		more:
			'At Deque he ships alongside the management job rather than instead of it: a Datadog APM and logging migration, a six-PR access-import series, and platform upgrades across Fastify, Prisma, TypeScript, Node and MySQL.',
		source: 'resume, August 2026',
		timing: '5 employers',
	},
	{
		id: 'greenfield',
		question: 'Can he start something from nothing?',
		body:
			'PreDiscover began as an empty repo and ended as a background-search platform with paying clients, cutting searches that took hours down to minutes or seconds.',
		more:
			'DesignStudio at Juvare was greenfield with constraints: a new enterprise application that had to fit inside WebEOC. He architected the front end and the testing suite.',
		source: 'PreDiscover, DesignStudio',
		timing: '2 greenfield builds',
	},
	{
		id: 'legacy',
		question: 'What about a system nobody wants to touch?',
		body:
			'He migrated MDL autoMation off Silverlight onto modern JavaScript while high-end dealerships kept running on it: the screens that greet guests and track vehicles in real time, and the dispatch tool valet staff use all day.',
		more:
			'The other version of that job was Shopmonkey, where he was the sole engineer holding version one up for roughly six thousand auto shops across the US and Canada while version two was being built.',
		source: 'MDL autoMation, Shopmonkey',
		timing: '2 engagements',
	},
	{
		id: 'lead',
		question: 'Is he a manager or an engineer?',
		body:
			'Both, deliberately. He manages thirteen engineers across three product teams in a forty-engineer organization at Deque Systems, and still ships production code.',
		more:
			'He also built the delivery-measurement layer the organization reads, now covering ten teams, so what his teams deliver is on the dashboard, not in his description of it.',
		source: 'resume, August 2026',
		timing: '13 reports',
	},
	{
		id: 'people',
		question: 'How does he grow people?',
		body:
			'By building real relationships first: bi-weekly one-to-ones, pair programming, and career planning built around what each engineer wants rather than only what the roadmap wants.',
		more:
			'It predates the job title. He taught high school English and ran training and advancement programs at Chick-fil-A. At Shopmonkey he built the team that interviewed, trained and placed more than twenty-five engineers across the org in three months, and mentored a support colleague into a full-time engineering role.',
		source: 'Deque, Shopmonkey, Chick-fil-A, Tucker High School',
		timing: '25+ engineers placed',
	},
	{
		id: 'ai',
		question: 'How does he use AI in the work?',
		body:
			'Most of the code he ships is written by an agent, over a shared written context, with hard stops on anything irreversible.',
		more:
			'At Deque this became an AI-assisted engineering operating system, productized at the CTO’s request into two org-wide template repositories, plus coding guidelines adopted across six-plus repos. He reads what an agent wrote before calling it done.',
		source: 'Deque Systems, his own agent platform',
		timing: 'daily',
	},
	{
		id: 'work',
		question: 'What is he like to work with?',
		body:
			'Direct, and allergic to progress theater. He would rather hear that something is broken on Tuesday than hear it is on track until Friday.',
		more:
			'He writes decisions down once so they do not get re-made worse later, and he expects the same.',
		source: 'written by David',
		timing: 'static',
	},
];
