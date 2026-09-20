import type { Metadata } from 'next';
import { Fraunces, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import { site } from '@/content/site';
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
			</body>
		</html>
	);
}
