/**
 * The answers behind the "Ask about my work" panel.
 *
 * These are questions a hiring manager or a prospective client actually asks,
 * answered from the record rather than from process talk. Written by hand and
 * served from the route handler, so the panel is a curated index, not a model.
 * To make it live, keep this shape and swap the body of `answerFor()` in
 * app/api/ask/route.ts — the client never changes.
 */

import { TODO } from './site';

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
			'A background-search platform with paying clients, two rewrites of production systems running inside car dealerships, a greenfield app builder at Juvare, and data visualisation on an MLOps platform at Modzy.',
		more:
			'The through line is that all of it went live and someone depended on it. The most recent one is a self-hosted agent platform he uses every day to run his own working life.',
		source: 'PreDiscover, MDL autoMation, BoardStudio, Modzy',
		timing: '6 projects',
	},
	{
		id: 'greenfield',
		question: 'Can he start something from nothing?',
		body:
			'Twice, with a product at the end of it. PreDiscover began as an empty repo and ended as a platform with active, paying customers, cutting searches from hours to seconds.',
		more:
			'BoardStudio was the other: a drag-and-drop and code-editing surface for building applications inside an existing product ecosystem, which is a harder greenfield because it has to live inside someone else’s constraints.',
		source: 'PreDiscover, BoardStudio',
		timing: '2 greenfield builds',
	},
	{
		id: 'legacy',
		question: 'What about a system nobody wants to touch?',
		body:
			'Two Silverlight applications at MDL autoMation, rewritten on current technology while dealerships kept running on them.',
		more:
			'One drives the large screens that greet guests and track vehicles in real time from in-car devices. The other is the dispatch tool valet and service staff use all day. Both are the kind of rewrite where downtime is somebody’s afternoon.',
		source: 'MDL autoMation',
		timing: '2 rewrites',
	},
	{
		id: 'lead',
		question: 'Is he a manager or an engineer?',
		body:
			'Both, deliberately. He manages ten-plus engineers across three teams at Deque Systems, and there is always something of his own being built alongside it, so he is still someone who has to make a thing work and not only review it.',
		more: `He came to management from teaching and from running training programs, not from being the strongest coder in the room. ${TODO('ADD ONE OUTCOME FROM THE DEQUE ROLE')}.`,
		source: 'Deque Systems, Tucker High School, Chick-fil-A',
		timing: '3 teams',
	},
	{
		id: 'ai',
		question: 'How does he use AI in the work?',
		body:
			'Most of the code he ships is written by an agent, over a shared written context, with hard stops on anything irreversible.',
		more:
			'The discipline matters more than the tooling: one of his own automations reported four records created and all four were wrong, on a green run. Nothing counts as working until he has read what it wrote.',
		source: 'his own agent platform, in daily use',
		timing: 'daily',
	},
	{
		id: 'work',
		question: 'What is he like to work with?',
		body:
			'Direct, and allergic to progress theater. He would rather hear that something is broken on Tuesday than hear it is on track until Friday.',
		more: `He writes decisions down once so they do not get re-made worse later, and he expects the same. ${TODO('ADD A LINE A FORMER COLLEAGUE ACTUALLY SAID')}.`,
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
		[['manage', 'lead', 'team', 'report', 'hiring', 'mentor'], 'lead'],
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
