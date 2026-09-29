import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
	return [{ url: `https://${site.domain}/`, changeFrequency: 'weekly', priority: 1 }];
}
