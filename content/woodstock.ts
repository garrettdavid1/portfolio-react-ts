/**
 * Copy for the Woodstock pages: the /woodstock hub and one page per service.
 * Same rule as content/site.ts: every word lives here, nothing in app/ carries copy.
 *
 * One page per service, never one page per town. Swapped-name town pages read
 * as duplicates and do not get indexed; the towns live in one "areas" section.
 */

/**
 * No prices anywhere on these pages, in titles or in the structured data: every
 * project differs, so the call to action is a free consultation and the price is
 * worked out together afterward (David, 2026-10-03).
 */

export const towns = ['Woodstock', 'Towne Lake', 'Canton', 'Holly Springs', 'Acworth', 'Kennesaw'];
export const county = 'Cherokee County';

export type Package = {
	name: string;
	what: string;
};

export const packages: Package[] = [
	{
		name: 'Free consultation',
		what: 'About ninety minutes at your business, at no charge and with no obligation. We find the biggest time sinks and talk through what fixing each would take.',
	},
	{
		name: 'Automation build',
		what: 'One workflow built end to end, such as missed-call answering, quotes and invoicing, scheduling, intake forms or bookkeeping hand-offs.',
	},
	{
		name: 'Team AI training',
		what: 'A half day on site, built around the work your team already does.',
	},
	{
		name: 'Ongoing help',
		what: 'Monitoring, fixes and small changes after a build. Month to month, cancel any time.',
	},
	{
		name: 'Custom software',
		what: 'Anything bigger: an internal app, a customer portal, a dashboard.',
	},
];

export const hub = {
	path: '/woodstock',
	crumb: 'Woodstock',
	title: 'AI and Automation for Woodstock, GA Businesses',
	description:
		'Software and AI for small businesses in Woodstock and Cherokee County, from a local developer. The first consultation is free, and you own everything that gets built.',
	kicker: 'FOR WOODSTOCK AND CHEROKEE COUNTY BUSINESSES',
	h1: 'Software and AI for Woodstock businesses.',
	lede: 'I take the busywork off your plate so you can get back to the work you started the business to do. I live in Woodstock, I build software for a living, and I come to your shop or office to see how your week really runs before I suggest anything.',
	why: {
		heading: 'Why a neighbor instead of an agency',
		points: [
			{
				title: 'The person you meet builds it.',
				body: 'The first conversation happens at your place of business, on a weekday evening or a Saturday. There is no sales team and no hand-off to someone you never met.',
			},
			{
				title: 'A fair price, agreed before any work starts.',
				body: 'The consultation is free. If we decide to work together, we agree on the scope and a price that is fair and gives you real value before anything gets built, and nothing grows on you halfway through.',
			},
			{
				title: 'You own all of it.',
				body: 'Accounts, code and data are set up in your name. Software you pay for is billed to you at cost with no markup from me, and nothing stops working if we part ways.',
			},
		],
	},
	packagesHeading: 'What you can hire me for',
	servicesHeading: 'Services',
	visit: {
		heading: 'How the free consultation works',
		steps: [
			{
				title: 'You send a note.',
				body: 'A sentence about what eats your week is plenty. I reply myself.',
			},
			{
				title: 'We meet at your business.',
				body: 'About ninety minutes. I watch how calls, quotes, scheduling and paperwork move today and ask what you would hand off if you could.',
			},
			{
				title: 'You get a written plan.',
				body: `The biggest time sinks and what fixing each would take. If we decide to work together, we'll work out a price that's fair and gives you real value. If not, the plan is still yours.`,
			},
		],
	},
	who: {
		heading: 'Who I work with',
		items: [
			{
				title: 'Trades and home services',
				body: 'Plumbers, HVAC, electricians, roofers and landscapers who lose jobs to missed calls and write quotes at night.',
			},
			{
				title: 'Professional offices',
				body: 'Accounting, law and insurance offices buried in document collection, intake and follow-up.',
			},
			{
				title: 'Dental and wellness',
				body: 'Front desks that spend the afternoon confirming tomorrow instead of helping the people in the room.',
			},
			{
				title: 'Real estate',
				body: 'Agents and small teams with leads arriving from several sites and no time to answer each one fast.',
			},
		],
	},
	areas: {
		heading: 'Areas I serve',
		body: 'I work in person across Cherokee County and the north edge of Cobb. Further out, we can do the whole thing over video.',
	},
	capacity: 'I take on a few new clients a month, so every one gets my full attention.',
	about: {
		heading: 'Who I am',
		body: 'Ten years as a software engineer and engineering manager, and before that a high school English teacher. I build with AI every day, and I explain what I build in plain language.',
		link: 'See my track record',
	},
	contact: {
		kicker: 'WOODSTOCK AND CHEROKEE COUNTY',
		title: 'What is eating your week?',
		body: 'Tell me what you would hand off if you could. I will reply myself, and if it makes sense we will set up a free consultation at your business.',
	},
};

export type Service = {
	slug: string;
	crumb: string;
	/** The card on the hub. */
	card: string;
	title: string;
	description: string;
	serviceType: string;
	h1: string;
	lede: string;
	sections: { heading: string; body?: string; items?: string[] }[];
	examples?: { heading: string; items: { who: string; before: string; after: string }[] };
	/** How the price gets set for this service. Never a number. */
	cost: string;
	faq: { q: string; a: string }[];
	contactTitle: string;
};

export const services: Service[] = [
	{
		slug: 'ai-receptionist',
		crumb: 'AI receptionist',
		card: 'Calls answered, jobs booked and missed callers texted back while you are on a job.',
		title: 'AI Receptionist for Woodstock, GA Businesses',
		description:
			'An AI receptionist for Woodstock and Cherokee County trades and offices: answers calls, texts back missed callers, books jobs and sends you a summary. Built and set up locally.',
		serviceType: 'AI receptionist and missed-call text back',
		h1: 'Stop losing jobs to voicemail.',
		lede: 'When you are on a ladder, under a sink or with a customer, the phone rings out and the caller tries the next name on the list. An AI receptionist picks up, takes the details or books the job, and puts a short summary on your phone.',
		sections: [
			{
				heading: 'What it does',
				items: [
					'Answers in your business name after a set number of rings, or after hours only.',
					'Asks the questions you would ask: the address, what is wrong, how soon they need someone.',
					'Books into the calendar or scheduling system you already use.',
					'Texts back anyone who hangs up, within a minute.',
					'Sends you a summary of every call, with the urgent ones at the top.',
					'Puts emergencies straight through to your cell.',
				],
			},
			{
				heading: 'What it will not do',
				body: 'It will not pretend to be a person. When a caller asks, it says it is an automated assistant for your business, and anyone who wants a human gets you or a callback. You decide what it is allowed to promise, and it never quotes a price you have not set.',
			},
			{
				heading: 'Who it suits',
				body: 'Owner-operators and small crews who work with their hands while the phone rings: plumbing, HVAC, electrical, roofing, landscaping, cleaning. It also helps an office front desk that cannot answer two lines at once.',
			},
		],
		cost: `It starts with a free consultation. If we decide to work together, we'll work out a price that's fair and gives you real value. The phone line and AI usage are billed by those providers straight to your account, with no markup from me, and I estimate that cost from your call volume before you commit.`,
		faq: [
			{
				q: 'Do I need a new phone number?',
				a: 'Usually not. Your existing number forwards to the assistant when you do not pick up, so customers keep calling the number on your truck.',
			},
			{
				q: 'What does it sound like?',
				a: 'A natural voice, at a normal pace. Before it goes live you call it yourself as many times as you like and we tune what it says.',
			},
			{
				q: 'I already pay an answering service. Why switch?',
				a: 'You may not need to. If the service books jobs well, keep it. If it only takes messages, the assistant can book the job and text the caller back instead, and the consultation compares the two for your business.',
			},
			{
				q: 'What if it gets something wrong?',
				a: 'Every call is summarized, so you see what was said. Mistakes become rule changes, and ongoing help covers that tuning.',
			},
		],
		contactTitle: 'How many calls go to voicemail in a week?',
	},
	{
		slug: 'business-automation',
		crumb: 'Business automation',
		card: 'Quotes, invoices, intake and follow-up that run without anyone retyping them.',
		title: 'Small Business Automation in Woodstock and Cherokee County',
		description:
			'Small business automation in Woodstock and Cherokee County: quotes, invoicing, intake, scheduling and follow-up wired together so nobody retypes them. Free consultation, and you own it.',
		serviceType: 'Business process automation',
		h1: 'The busywork, handled.',
		lede: 'Most small businesses lose hours every week to work a computer should be doing: typing the same details into three places, chasing invoices, building each quote from scratch. I find those hours and build the fix, inside the software you already pay for wherever possible.',
		sections: [
			{
				heading: 'What gets automated',
				items: [
					'Quotes and estimates built from your own price list, sent from your phone.',
					'Invoices that go out when a job closes, with reminders until they are paid.',
					'Intake forms that file themselves into the right client folder.',
					'Appointment confirmations and reminders by text.',
					'Leads from every source collected in one list and answered within minutes.',
					'Bookkeeping hand-offs to your accounting software, such as QuickBooks or Xero.',
				],
			},
			{
				heading: 'Working with what you have',
				body: 'I connect the calendar, email, accounting and customer software you already use rather than selling you a new system. If the right answer is a feature you already pay for and nobody has switched on, I will tell you that instead of building something.',
			},
		],
		examples: {
			heading: 'Before and after',
			items: [
				{
					who: 'A roofing or HVAC company',
					before: 'Quotes are written on paper in the truck, typed up at night and emailed whenever there is time.',
					after: 'The quote is built on a phone at the job from the price list, sent before you leave the driveway, and followed up after three days if nobody answers.',
				},
				{
					who: 'An accounting or insurance office',
					before: 'Clients email documents and someone renames and files each one by hand.',
					after: 'Clients upload through one link. Files are named, sorted into the right folder, and the checklist of what is still missing updates itself.',
				},
				{
					who: 'A dental or wellness practice',
					before: 'The front desk spends the afternoon calling every patient to confirm tomorrow.',
					after: 'Confirmations go out by text, replies update the schedule, and the desk only calls the people who did not answer.',
				},
				{
					who: 'A real estate team',
					before: 'Leads from four websites land in four inboxes and some wait a day for a reply.',
					after: 'Every lead lands in one list, gets a first reply within minutes, and the hot ones come to your phone as a text.',
				},
			],
		},
		cost: `It starts with a free consultation. If we decide to work together, we'll work out a price that's fair and gives you real value. Ongoing help after a build is optional and month to month.`,
		faq: [
			{
				q: 'Will this replace my staff?',
				a: 'It replaces the part of their day they like least. The owners I talk to want their people answering customers, not retyping forms.',
			},
			{
				q: 'Do I have to switch software?',
				a: 'Almost never. The build connects what you run today. If a tool truly cannot do the job, I will say so and suggest the alternative.',
			},
			{
				q: 'What happens when something breaks?',
				a: 'Each build alerts me and you when a step fails, and comes with written notes on how it works. Ongoing help covers fixes and changes after launch.',
			},
			{
				q: 'How long does a build take?',
				a: 'Most single workflows take a few weeks, and much of that is waiting on account access and testing with your real data.',
			},
		],
		contactTitle: 'Which task do you retype every week?',
	},
	{
		slug: 'ai-training',
		crumb: 'AI training',
		card: 'A half day on site teaching your team to use AI on the work they already do.',
		title: 'AI Training for Small Business Teams in Woodstock, GA',
		description:
			'Hands-on AI training for small business teams in Woodstock and Cherokee County, run at your office on your own emails, estimates and documents. Plain language, no code.',
		serviceType: 'AI training for small business teams',
		h1: 'AI training built around your actual work.',
		lede: 'Generic workshops teach the tool. This session teaches your people to use it on the emails, estimates, write-ups and research they already do each week, so they keep using it after I leave.',
		sections: [
			{
				heading: 'How the session runs',
				items: [
					'Beforehand, an hour with you to collect real examples of the work, with private details removed.',
					'A half day at your office, everyone on their own laptop, working on their own tasks.',
					'Afterward, a one-page guide written for your business: what to use AI for, what never to paste into it, and the instructions that worked in the room.',
				],
			},
			{
				heading: 'What your team learns',
				items: [
					'Drafting and answering email in your business voice.',
					'Turning job notes into estimates, proposals and reports.',
					'Summarizing long documents, contracts and threads.',
					'Researching a supplier, a regulation or a competitor quickly and checking the answer.',
					'Where the answers go wrong, and how to catch it.',
				],
			},
			{
				heading: 'Customer data stays safe',
				body: 'What not to share is part of the training. Customer records, health information and passwords stay out of public AI tools, and each business leaves with written rules that fit its own work.',
			},
		],
		cost: `It starts with a free consultation about your team and its work. If we decide to work together, we'll work out a price that's fair and gives you real value. The price covers the whole team, the prep hour and the written guide.`,
		faq: [
			{
				q: 'Do we need paid AI accounts?',
				a: 'No. The session works with free accounts. If a paid plan would pay for itself in your business, I will say which and why, and you buy it directly.',
			},
			{
				q: 'Is anyone too far behind for this?',
				a: 'No. It is plain language with no code, and I taught high school before I wrote software. People who have never opened an AI tool do fine.',
			},
			{
				q: 'Can you train just me?',
				a: 'Yes. Owners often start with a one-on-one session and bring the team in once they see what it does for their own week.',
			},
		],
		contactTitle: 'How many people would be in the room?',
	},
	{
		slug: 'custom-software',
		crumb: 'Custom software',
		card: 'An internal app, a customer portal or a dashboard when nothing off the shelf fits.',
		title: 'Custom Software Developer in Woodstock, GA',
		description:
			'Custom software development for Woodstock and Cherokee County businesses: internal tools, customer portals, dashboards and integrations, built by a local developer with ten years of production experience.',
		serviceType: 'Custom software development',
		h1: 'When nothing off the shelf fits.',
		lede: 'Sometimes the tool you need does not exist, or the one you pay for covers most of the job and the rest eats your week. I build the missing piece: an internal app, a customer portal, a dashboard, or the link between two systems that will not talk to each other.',
		sections: [
			{
				heading: 'What I build',
				items: [
					'Internal tools that replace the spreadsheet everyone is afraid to touch.',
					'Customer portals for orders, documents, status and payments.',
					'Dashboards that pull numbers from several systems into one page.',
					'Integrations between software that has no built-in connection.',
					'Repairs and upgrades to something a previous developer left behind.',
				],
			},
			{
				heading: 'What you get',
				body: 'Working software in your own accounts, the code in a repository you own, and written notes a future developer can pick up. If you want me to keep it running, ongoing help covers that month to month.',
			},
			{
				heading: 'Experience',
				body: 'Ten years shipping production software as an engineer and engineering manager, for companies large and small. I build with AI tools every day, which is a large part of why projects take weeks rather than quarters.',
			},
		],
		cost: `Custom work starts with a free consultation. If we decide to work together, we'll work out a price that's fair and gives you real value. You get a written scope and the agreed price before any code is written.`,
		faq: [
			{
				q: 'Who owns the code?',
				a: 'You do. It lives in your accounts from day one, and nothing about it depends on me.',
			},
			{
				q: 'Can you work on software someone else built?',
				a: 'Yes. The first step is a review of what is there, and you get an honest read on whether to fix it or replace it.',
			},
			{
				q: 'How long does a project take?',
				a: 'It depends on the scope, which is why the scope comes first. Small tools take a few weeks, and the written plan gives you the timeline.',
			},
		],
		contactTitle: 'What would you build if it were easy?',
	},
];

export function serviceBySlug(slug: string): Service | undefined {
	return services.find((s) => s.slug === slug);
}
