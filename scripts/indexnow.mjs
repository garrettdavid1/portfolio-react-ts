/**
 * Tell Bing (and every other IndexNow engine) which URLs exist. Run after a deploy lands:
 * `npm run indexnow`.
 *
 * Google finds the pages from the Search Console sitemap; IndexNow needs no account. The key
 * file in `public/` proves we own the host, and one POST submits every URL in the live sitemap.
 * Vercel deploys on push, so this reads the deployed sitemap rather than a local build.
 */
import { readdirSync } from 'node:fs';

const SITEMAP = 'https://davidgarrett.us/sitemap.xml';

const keyFile = readdirSync('public').find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
if (!keyFile) throw new Error('No IndexNow key file in public/');
const key = keyFile.slice(0, -4);

const xml = await (await fetch(SITEMAP)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) throw new Error(`No URLs in ${SITEMAP}`);

const { host, origin } = new URL(urlList[0]);
const live = await fetch(`${origin}/${keyFile}`);
if (!live.ok || (await live.text()).trim() !== key) throw new Error(`Key file not live at ${origin}/${keyFile}`);

const response = await fetch('https://api.indexnow.org/indexnow', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json; charset=utf-8' },
	body: JSON.stringify({ host, key, keyLocation: `${origin}/${keyFile}`, urlList }),
});

// 200 and 202 both mean accepted; 403 means the key file is not live yet.
console.log(`IndexNow: ${urlList.length} URLs for ${host}, HTTP ${response.status}`);
if (!response.ok) process.exit(1);
