# davidgarrett.us

Personal site. Next.js App Router, no UI framework, three Google fonts, one page.

Design direction: "Field Notes" — ivory paper, Fraunces over Newsreader, IBM Plex Mono
for machine text, rust accent. Two pieces carry the weight: the **Ask my system** panel
under the hero, and the **one ordinary Tuesday** timeline below it.

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

- years shipping software (`N`, used in the hero, the about block and the ask panel)
- roles and companies before Deque
- one measurable outcome from the Deque role
- the contract engagement: what it is, what David owns, the result
- one prior role worth keeping
- what he is building this month, for the Now panel
- a line a former colleague actually said, for the "what is he like to work with" answer
- the three footer links

## The Ask panel

`components/AskPanel.tsx` posts to `app/api/ask/route.ts`, which today resolves against a
hand-written index in `content/answers.ts`. It is a curated lookup, not a model, and the
free-text path deliberately answers "I do not have a written answer for that one" rather
than guessing.

To make it live, replace the body of `answerFor()` in the route with a model call over an
allow-listed slice of the control plane. Keep what is already there: the per-IP rate
limit, the length caps on input, and the refusal path. Nothing under `vault/`, and nothing
about the businesses, is ever in scope.

## The signup form

`app/api/subscribe/route.ts` adds the address to a Resend audience when `RESEND_API_KEY`
and `RESEND_AUDIENCE_ID` are set. Without them it returns 503 with an honest message
instead of pretending to have stored anything.

## Deploying

The domain is on Vercel (`www` CNAMEs to `cname.vercel-dns.com`, apex to `76.76.21.21`).
The previous site was Create React App, so the Vercel project's **framework preset needs
changing to Next.js** before the first deploy from this branch, and the two environment
variables above need setting if the signup form is meant to work.

## Theme

Light is the designed direction; a dark variant is defined under
`prefers-color-scheme: dark` in `app/globals.css`. Both use the same token names, so
adding a manual toggle later means overriding the tokens on a `data-theme` attribute.
