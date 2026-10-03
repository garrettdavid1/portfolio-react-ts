import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { hub, services } from '@/content/woodstock';

/** Every public route. A new page is not findable until it is listed here. */
const routes: { path: string; priority: number }[] = [
	{ path: '/', priority: 1 },
	{ path: hub.path, priority: 0.9 },
	...services.map((s) => ({ path: `${hub.path}/${s.slug}`, priority: 0.8 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map((r) => ({
		url: `https://${site.domain}${r.path}`,
		changeFrequency: 'monthly',
		priority: r.priority,
	}));
}
