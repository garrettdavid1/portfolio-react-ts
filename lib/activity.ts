/**
 * Counts from David's own task platform, published by a public endpoint that
 * returns numbers and nothing else. Only the keys below are read, and only
 * when they are finite integers, so an unexpected field can never reach the
 * page. Any failure hides the live line rather than showing a stale or
 * invented number.
 */

export type Activity = {
	windowDays: number;
	tasksFiledByAgents?: number;
	tasksClosed?: number;
	handedToDavid?: number;
	briefings?: number;
};

const KEYS = ['windowDays', 'tasksFiledByAgents', 'tasksClosed', 'handedToDavid', 'briefings'] as const;

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
		if (!picked.windowDays || picked.tasksFiledByAgents === undefined) return null;
		return picked as Activity;
	} catch {
		return null;
	}
}
