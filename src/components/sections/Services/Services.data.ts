import MentoringIcon from '../../../assets/img/services/MentoringIcon.svg';
import WebDevIcon from '../../../assets/img/services/WebDevIcon.svg';
import BugFixIcon from '../../../assets/img/services/BugFixIcon.svg';
import MentoringNoArrow from '../../../assets/img/services/MentoringNoArrow.svg';
import WebDevNoArrow from '../../../assets/img/services/WebDevNoArrow.svg';
import BugFixNoArrow from '../../../assets/img/services/BugFixNoArrow.svg';

export interface Service {
	name: string;
	text: string;
	image: string;
	imageWithoutArrow: string;
	imageSide: 'left' | 'right'
}

export const services: Service[] = [
	{
		name: 'Mentoring',
		text: `Learning to code can be a challenge, especially on your own. I know this firsthand because I taught myself, not knowing what I was getting myself into or who to ask. To help you realize your goals, I offer my knowledge, time, and experience teaching, training, and recruiting to help you, emerging developer. Through one-on-one sessions, I will assess your current skill level, help you develop a plan, and guide you through your journey of landing your first dev job.`,
		image: MentoringIcon,
		imageWithoutArrow: MentoringNoArrow,
		imageSide: 'left'
	},
	{
		name: 'Web Development',
		text: `From simple, static websites to full-fledged, interactive web apps, I build it all. I have spent years honing my craft to enable me to build from the front end to the back, floor to ceiling. Using your brilliant ideas and needs, I will lay out a detailed development plan, execute on it meticulously, and help you launch your next app into the online world. The only thing standing between you and making your vision a reality is already behind you. Let's do it today.`,
		image: WebDevIcon,
		imageWithoutArrow: WebDevNoArrow,
		imageSide: 'right'
	},
	{
		name: 'Bug Fixing',
		text: `When bugs appear in your app, nobody is happy. Users become frustrated, possibly leave, and your bottom line drops a little every time. That's where I come in. Whenever a problem rears its head in your existing web app, I will investigate, perform a root cause analysis, and promptly eliminate it from your worries. I have years of experience in identifying and fixing issues in highly complex apps, so you can be sure I'll get the job done. I may as well be an exterminator.`,
		image: BugFixIcon,
		imageWithoutArrow: BugFixNoArrow,
		imageSide: 'left'
	},
]