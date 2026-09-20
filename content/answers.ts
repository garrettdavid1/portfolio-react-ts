/**
 * The answers behind the "Ask my system" panel.
 *
 * Today these are written by hand and served from the route handler, so the
 * panel is honest about being a canned index rather than a live model. To make
 * it live, keep this shape and swap the body of `answerFor()` in
 * app/api/ask/route.ts — the client never changes.
 */

import { TODO } from './site';

export type Answer = {
	id: string;
	question: string;
	body: string;
	more: string;
	/** Where the claim comes from. Shown verbatim under the answer. */
	source: string;
	/** Retrieval cost, shown next to the source. Honest, not decorative. */
	timing: string;
};

export const answers: Answer[] = [
	{
		id: 'shipped',
		question: 'What has he actually shipped?',
		body:
			'A self-hosted agent platform he uses every day: a web app, an API, a scheduler and an MCP server, with a task store that pushes to his phone when something is urgent.',
		more: `Alongside that, ${TODO('N')} years of product engineering and an ongoing contract engagement. At Deque Systems he is accountable for three teams rather than a codebase, so the shipping there is other people’s.`,
		source: 'domains/life-ops-platform, domains/side-contract',
		timing: '4 files read',
	},
	{
		id: 'ai',
		question: 'How does he use AI day to day?',
		body:
			'Eleven agents, each scoped to one domain, over a shared memory store and a control plane repo they all read before acting.',
		more:
			'They plan work, write and deploy code, triage his inbox and draft his writing. Anything irreversible stops and waits for him: money, contracts, first contact with a person.',
		source: 'docs/agent-fleet.md, memory index',
		timing: '7 files read',
	},
	{
		id: 'a11y',
		question: 'Is he any good at accessibility?',
		body:
			'He manages the teams building the tooling that finds and fixes it, including the API integrations and the scanning engine side.',
		more: `In practice that means treating conformance as an engineering constraint with tests behind it, not a report produced at the end. ${TODO('ADD ONE CONCRETE OUTCOME HERE')}.`,
		source: 'domains/deque',
		timing: '3 files read',
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
	{
		id: 'broke',
		question: 'What has he broken?',
		body:
			'An automation of his own reported four records created. All four were wrong, the run was green, and nothing in the output said otherwise.',
		more:
			'That is where his rule came from: a count is not a result, and nothing is working until he has read what it wrote. There is a post about it further down.',
		source: 'memory: verify what the automation wrote',
		timing: '1 file read',
	},
];

export const fallbackAnswer: Answer = {
	id: 'unknown',
	question: '',
	body: 'I do not have a written answer for that one.',
	more:
		'This panel only answers from facts David has actually written down, and it will say so rather than invent something. Try one of the questions on the left, or email him.',
	source: 'no matching record',
	timing: '0 files read',
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
		[['ship', 'built', 'build', 'portfolio', 'project'], 'shipped'],
		[['ai', 'agent', 'llm', 'claude', 'automation', 'mcp'], 'ai'],
		[['accessib', 'a11y', 'wcag', 'axe', 'deque'], 'a11y'],
		[['work with', 'manage', 'team', 'lead', 'like to work'], 'work'],
		[['broke', 'broken', 'fail', 'mistake', 'wrong'], 'broke'],
	];
	for (const [needles, id] of rules) {
		if (needles.some((n) => q.includes(n))) {
			const hit = findAnswer(id);
			if (hit) return { ...hit, question: text };
		}
	}
	return { ...fallbackAnswer, question: text };
}
