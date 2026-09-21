# davidgarrett.us

Personal site. Next.js App Router, no UI framework, three Google fonts. A homepage and a
`/briefing` signup page.

Design direction: "Field Notes" — ivory paper, Fraunces over Newsreader, IBM Plex Mono
for machine text, rust accent.

The page leads with the work and the value, not with process. After the hero come three
claims under "what I get hired for", each tied to a named project, then six case entries.
Two pieces carry extra weight: the **career arc**, an engraved axis from teaching through
to engineering management, and the **Ask about my work** panel, which answers a hiring
manager's questions and cites what it read.

One standing constraint: the site must not read as touting for contract work. David is not
advertising availability. The framing is that he is always building something outside the
day job, which is why he is still close to the code.

## Run it

```
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Before launch: fill in the facts

Every word lives in `content/site.ts` and `content/answers.ts`. Anything still wrapped in
`TODO('…')` renders as `[LIKE THIS]` and is counted by a banner that only appears in
`npm run dev`. The build does not fail on them, on purpose — but nothing should ship with
one visible.

Outstanding as of this commit:

- one line on what the MDL Silverlight migration unblocked
- a line a former colleague actually said, for the "what is he like to work with" answer
- LinkedIn and GitHub URLs for the footer

Open questions: whether the Juvare product was BoardStudio (old site) or DesignStudio
(resume), and whether Modzy, which the old site listed as an employer, belongs under
VersaDev client work.



## The Ask panel

`components/AskPanel.tsx` is a static question list. Every answer lives in
`content/answers.ts` and ships with the page, so picking a question is local state,
not a request. There is no model behind it, no free-text box and no API route:
David decided against wiring an agent to it (2026-09-21).

## The two forms

The homepage form posts to `app/api/contact/route.ts`, which emails David through Resend
when `RESEND_API_KEY`, `CONTACT_TO` and `CONTACT_FROM` are set.

The `/briefing` page is the signup the LinkedIn funnel points at. It posts to
`app/api/subscribe/route.ts`, which adds the address to a Resend audience when
`RESEND_API_KEY` and `RESEND_AUDIENCE_ID` are set.

Without their variables both return 503 with an honest message rather than pretending to
have stored anything. A form that silently drops mail is worse than no form.

## Deploying

The domain is on Vercel (`www` CNAMEs to `cname.vercel-dns.com`, apex to `76.76.21.21`).
The previous site was Create React App, so the Vercel project's **framework preset needs
changing to Next.js** before the first deploy from this branch, and the two environment
variables above need setting if the forms are meant to work.

## Theme

Light is the designed direction; a dark variant is defined under
`prefers-color-scheme: dark` in `app/globals.css`. Both use the same token names, so
adding a manual toggle later means overriding the tokens on a `data-theme` attribute.
