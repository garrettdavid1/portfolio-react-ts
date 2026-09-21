/**
 * The answers behind the "Ask about my work" panel.
 *
 * Questions a hiring manager or a prospective client actually asks, answered
 * from the record rather than from process talk. Facts come from David's
 * resume (2026-08). Written by hand and served from the route handler, so the
 * panel is a curated index, not a model. To make it live, keep this shape and
 * swap the body of `answerFor()` in app/api/ask/route.ts — the client never
 * changes.
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
		question: 'What has he actually shipped?',
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
			'DesignStudio at Juvare was the other kind of greenfield, harder in its way: a new enterprise application built inside an existing product ecosystem, where he architected both the front end and the testing suite.',
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
			'What he actually does with it: keeps engineers on their top priorities, holds the bar on accountability, and builds the incentive that lets a team rally around a quarter. He also built the delivery-measurement layer the organization reads, so the result is visible rather than asserted.',
		source: 'resume, August 2026',
		timing: '12 reports',
	},
	{
		id: 'people',
		question: 'How does he actually grow people?',
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
			'At Deque this became an AI-assisted engineering operating system, productized at the CTO’s request into two org-wide template repositories, plus coding guidelines adopted across six-plus repos. The discipline matters more than the tooling: one of his own automations reported four records created and all four were wrong, on a green run.',
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
		source: 'written by David, not the agent',
		timing: 'static',
	},
];

export const fallbackAnswer: Answer = {
	id: 'unknown',
	question: '',
	body: 'I do not have a written answer for that one.',
	more:
		'This panel only answers from things David has actually written down, and it will say so rather than invent something. Try one of the questions on the left, or just email him.',
	source: 'no matching record',
	timing: 'no match',
};

export function findAnswer(id: string): Answer | undefined {
	return answers.find((a) => a.id === id);
}

/**
 * Deliberately dumb keyword matching for free-text questions. It exists so the
 * panel degrades to "I do not know" instead of guessing. Replace this, not the
 * client, when the live version lands.
 */
export function matchQuestion(text: string): Answer {
	const q = text.toLowerCase();
	const rules: Array<[string[], string]> = [
		[['greenfield', 'from scratch', 'zero to', 'start something', 'new product'], 'greenfield'],
		[['legacy', 'rewrite', 'migrat', 'old system', 'modernis', 'moderniz'], 'legacy'],
		[['grow', 'mentor', 'coach', 'hiring', 'interview', 'onboard', 'career'], 'people'],
		[['manage', 'lead', 'team', 'report', 'headcount'], 'lead'],
		[['ai', 'agent', 'llm', 'claude', 'copilot', 'automation'], 'ai'],
		[['work with', 'like to work', 'culture', 'communicat'], 'work'],
		[['ship', 'built', 'build', 'project', 'portfolio', 'experience'], 'shipped'],
	];
	for (const [needles, id] of rules) {
		if (needles.some((n) => q.includes(n))) {
			const hit = findAnswer(id);
			if (hit) return { ...hit, question: text };
		}
	}
	return { ...fallbackAnswer, question: text };
}
