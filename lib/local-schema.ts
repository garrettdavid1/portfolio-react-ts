import { site } from '@/content/site';
import { county, hub, towns, type Service } from '@/content/woodstock';

/**
 * Structured data for the Woodstock pages. The business has no street address on
 * purpose: it is run from home and listed as a service-area business, so only
 * the town and the areas served appear. No Offer or price data: prices are agreed
 * per project after a free consultation.
 */

const origin = `https://${site.domain}`;
export const personId = `${origin}/#david`;
const businessId = `${origin}${hub.path}#business`;

const areaServed = [
	...towns.map((name) => ({ '@type': 'City', name: `${name}, GA` })),
	{ '@type': 'AdministrativeArea', name: `${county}, GA` },
];

export function businessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		'@id': businessId,
		name: site.name,
		url: `${origin}${hub.path}`,
		description: hub.description,
		email: 'davidgarrettcoding@gmail.com',
		address: { '@type': 'PostalAddress', addressLocality: 'Woodstock', addressRegion: 'GA', addressCountry: 'US' },
		areaServed,
		founder: { '@id': personId },
	};
}

export function serviceSchema(s: Service) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: s.crumb,
		serviceType: s.serviceType,
		description: s.description,
		url: `${origin}${hub.path}/${s.slug}`,
		provider: { '@id': businessId },
		areaServed,
	};
}

export function breadcrumbs(trail: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: trail.map((t, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: t.name,
			item: `${origin}${t.path}`,
		})),
	};
}
