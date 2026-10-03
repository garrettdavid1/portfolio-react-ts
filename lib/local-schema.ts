import { site } from '@/content/site';
import { county, hub, packageFor, packages, pricesPublished, towns, type Package, type Service } from '@/content/woodstock';

/**
 * Structured data for the Woodstock pages. The business has no street address on
 * purpose: it is run from home and listed as a service-area business, so only
 * the town and the areas served appear.
 */

const origin = `https://${site.domain}`;
export const personId = `${origin}/#david`;
const businessId = `${origin}${hub.path}#business`;

const areaServed = [
	...towns.map((name) => ({ '@type': 'City', name: `${name}, GA` })),
	{ '@type': 'AdministrativeArea', name: `${county}, GA` },
];

function offer(p: Package) {
	if (p.from === null) return null;
	return {
		'@type': 'Offer',
		name: p.name,
		priceCurrency: 'USD',
		priceSpecification: {
			'@type': p.unit ? 'UnitPriceSpecification' : 'PriceSpecification',
			minPrice: p.from,
			priceCurrency: 'USD',
			...(p.unit ? { unitText: 'MONTH' } : {}),
		},
		areaServed,
	};
}

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
		...(pricesPublished
			? {
					hasOfferCatalog: {
						'@type': 'OfferCatalog',
						name: hub.packagesHeading,
						itemListElement: packages.map(offer).filter(Boolean),
					},
				}
			: {}),
	};
}

export function serviceSchema(s: Service) {
	const o = pricesPublished ? offer(packageFor(s)) : null;
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: s.crumb,
		serviceType: s.serviceType,
		description: s.description,
		url: `${origin}${hub.path}/${s.slug}`,
		provider: { '@id': businessId },
		areaServed,
		...(o ? { offers: o } : {}),
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
