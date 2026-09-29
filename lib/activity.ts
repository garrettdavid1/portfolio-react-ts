/**
 * Counts from David's own task platform, published by a public endpoint that
 * returns numbers and nothing else. Only the keys below are read, and only
 * when they are non-negative integers, so an unexpected field can never reach
 * the page. Any failure hides the live line rather than showing a stale or
 * invented number.
 */

export type Activity = {
	windowDays: number;
	/** Commits carrying an agent co-author trailer, across David's repos. */
	agentCommits?: number;
	pullRequestsMerged?: number;
	/** Tasks an agent closed itself, not David. */
	tasksCompletedByAgents?: number;
	tasksFiledByAgents?: number;
	/** Agent-filed tasks urgent enough to buzz David's phone. */
	handedToDavid?: number;
	remindersDelivered?: number;
	emailActionsCompleted?: number;
	briefings?: number;
};

const KEYS = [
	'windowDays',
	'agentCommits',
	'pullRequestsMerged',
	'tasksCompletedByAgents',
	'tasksFiledByAgents',
	'handedToDavid',
	'remindersDelivered',
	'emailActionsCompleted',
	'briefings',
] as const;

export const ACTIVITY_URL = process.env.ACTIVITY_URL ?? '';

export async function getActivity(): Promise<Activity | null> {
	if (!ACTIVITY_URL) return null;
	try {
		const res = await fetch(ACTIVITY_URL, {
			next: { revalidate: 3600 },
			signal: AbortSignal.timeout(4000),
		});
		if (!res.ok) return null;
		const raw: unknown = await res.json();
		if (!raw || typeof raw !== 'object') return null;

		const picked: Partial<Activity> = {};
		for (const key of KEYS) {
			const v = (raw as Record<string, unknown>)[key];
			if (typeof v === 'number' && Number.isInteger(v) && v >= 0) picked[key] = v;
		}
		if (!picked.windowDays) return null;
		return picked as Activity;
	} catch {
		return null;
	}
}
