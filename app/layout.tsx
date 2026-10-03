import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Fraunces, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import { footer, site } from '@/content/site';
import { personId } from '@/lib/local-schema';
import './globals.css';

const display = Fraunces({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	variable: '--font-display',
	display: 'swap',
});

const body = Newsreader({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-body',
	display: 'swap',
});

const mono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono',
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL(`https://${site.domain}`),
	title: {
		default: `${site.name} — ${site.tagline}`,
		template: `%s — ${site.name}`,
	},
	description: site.description,
	openGraph: {
		title: `${site.name} — ${site.tagline}`,
		description: site.description,
		url: `https://${site.domain}`,
		siteName: site.name,
		type: 'website',
	},
	robots: { index: true, follow: true },
	alternates: { canonical: '/' },
	twitter: { card: 'summary_large_image' },
};

/** Tells search engines who the page is about, so results show the name and role. */
const person = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': personId,
	name: site.name,
	url: `https://${site.domain}`,
	jobTitle: 'Software engineer and engineering manager',
	description: site.description,
	address: { '@type': 'PostalAddress', addressLocality: 'Woodstock', addressRegion: 'GA', addressCountry: 'US' },
	sameAs: footer.links.filter((l) => l.href.startsWith('https://')).map((l) => l.href),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
			<body>
				<a className="skip-link" href="#main">
					Skip to content
				</a>
				{children}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
				/>
				<Analytics />
			</body>
		</html>
	);
}
