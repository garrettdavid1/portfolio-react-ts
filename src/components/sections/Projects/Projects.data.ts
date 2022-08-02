import EarthGuardians from '../../../assets/img/projectThumbnails/EarthGuardians.png';
import MdlDispatch from '../../../assets/img/projectThumbnails/MdlDispatch.png';
import MdlFlatScreen from '../../../assets/img/projectThumbnails/MdlFlatScreen.png';
import MdlMobile from '../../../assets/img/projectThumbnails/MdlMobile.png';
import TocBox from '../../../assets/img/projectThumbnails/TocBox.png';
import Chickfila from '../../../assets/img/projectThumbnails/Chickfila.png';
import WeatherStrike from '../../../assets/img/projectThumbnails/WeatherStrike.svg';
import Teaching from '../../../assets/img/projectThumbnails/Teaching.jpg';
import BoardStudio from '../../../assets/img/projectThumbnails/BoardStudio.png';
import Portfolio from '../../../assets/img/projectThumbnails/Portfolio.png';
import Modzy from '../../../assets/img/projectThumbnails/Modzy.png';
import PreDiscover from '../../../assets/img/projectThumbnails/PreDiscover.png';

export interface Project {
	order: number;
	employer: string;
	name: string;
	description: string;
	skills: string[];
	image?: string;
	forceFullWidthImage?: boolean;
}

enum Skills {
	Web = 'Web App',
	Mobile = 'Mobile App',
	HTML = 'HTML',
	CSS = 'CSS',
	JS = 'Javascript',
	TS = 'Typescript',
	ReactJS = 'ReactJS',
	ReactNative = 'React Native with Expo.io',
	Redux = 'Redux',
	PHP = 'PHP (Laravel Framework)',
	Knockout = 'KnockoutJS',
	JQuery = 'JQuery',
	NETWebAPI = 'C#/.NET Web API',
	NodeJS = 'Node.js',
	ExpressJS = 'Express.js',
	Heroku = 'Heroku',
	SignalR = 'SignalR',
	MongoDB = 'MongoDB',
	GrapesJS = 'GrapesJS',
	Monaco = 'Monaco Editor',
	Jest = 'Jest',
	ReactTestingLibrary = 'React Testing Library',
	SQL = 'SQL',
	GraphQL = 'GraphQL',
	Mentoring = 'Mentoring',
	FrontEnd = 'Front End',
	BackEnd = 'Back End',
	D3 = 'D3.js'
}

export const projects: Project[] = [
	{
		order: 11,
		employer: 'Chick-fil-a',
		name: 'Training Director',
		description:
			'While in college studying how to lead and communicate, I put my studies into practice and learned how to develop others into strategic and capable leaders in a positive way. Officially, I developed & implemented training & advancement programs.',
		skills: [Skills.Mentoring],
		image: Chickfila
	},
	{
		order: 10,
		employer: 'Tucker High School',
		name: 'High School English Teacher',
		description:
			'Here, I learned how to prepare and deliver thought-provoking lessons, the power of mentoring with care, and how wholesome it feels to help others have lightbulb moments.',
		skills: [Skills.Mentoring],
		image: Teaching,
		forceFullWidthImage: true
	},
	{
		order: 9,
		employer: 'MDL autoMation',
		name: 'Service Drive Flatscreen Rewrite',
		description:
			"Complete rewrite of MDL's Silverlight Flatscreen web app using newer technologies. This app is displayed on large screens inside high end car dealerships to greet guests, as well as display information about each guest currently at the dealership. It polls for data collected by tracking devices installed inside vehicles and displays real-time updates based on movement within the dealership.",
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.CSS,
			Skills.JS,
			Skills.Knockout,
			Skills.NETWebAPI,
			Skills.SignalR,
			Skills.MongoDB,
			Skills.FrontEnd,
			Skills.BackEnd
		],
		image: MdlFlatScreen
	},
	{
		order: 8,
		employer: 'VersaDev, LLC',
		name: 'WeatherStrike',
		description:
			'Contract web app providing weather reporting data to various industries interfacing with the commercial and residential real estate insurance market.',
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.CSS,
			Skills.JS,
			Skills.JQuery,
			Skills.PHP,
			Skills.MongoDB,
			Skills.FrontEnd,
			Skills.BackEnd
		],
		image: WeatherStrike,
		forceFullWidthImage: true
	},
	{
		order: 7,
		employer: 'MDL autoMation',
		name: 'Dispatch Master Rewrite',
		description:
			"Complete rewrite of MDL's Silverlight Dispatch web app using newer technologies. This app is a tool that a car dealership's valet and service staff use to communicate about the location and retrieval of a customer's vehicle. Users, as well as system events, can trigger requests for valet staff to locate and deliver a customer's vehicle to specific locations around the dealership.",
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.CSS,
			Skills.JS,
			Skills.Knockout,
			Skills.NETWebAPI,
			Skills.SignalR,
			Skills.MongoDB,
			Skills.FrontEnd,
			Skills.BackEnd
		],
		image: MdlDispatch
	},
	{
		order: 6,
		employer: 'MDL autoMation',
		name: 'MDL Mobile',
		description:
			'Mobile app that provides workday management tools for service and sales managers of car dealerships.',
		skills: [
			Skills.Mobile,
			Skills.ReactNative,
			Skills.NETWebAPI,
			Skills.MongoDB,
			Skills.FrontEnd
		],
		image: MdlMobile
	},
	{
		order: 5,
		employer: 'VersaDev, LLC',
		name: 'Toc Solutions Management Portal',
		description:
			'Contract web app providing a data/admin management portal, data visualization and monitoring tools to give users insight into usage and status of Toc Solutions\' Toc Box product. I was responsible for the majority of the front-end development, taking designs and translating them into real, functional, and efficient pages.',
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.ReactJS,
			Skills.GraphQL,
			Skills.FrontEnd
		],
		image: TocBox
	},
	{
		order: 4,
		employer: 'VersaDev, LLC',
		name: 'Earth Guardians Management Portal',
		description:
			'Contract web app providing a data/admin management portal. I was responsible for designing and developing the front-end MVP.',
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.ReactJS,
			Skills.GraphQL,
			Skills.FrontEnd
		],
		image: EarthGuardians
	},
	{
		order: 3,
		employer: 'Juvare',
		name: 'BoardStudio',
		description:
			"Greenfield web app designed to allow users to easily build and design complex applications that integrate with Juvare's WebEOC product ecosystem. It utilizes GrapesJS & Monaco Editor to give users drag, drop, and code editing capabilities.",
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.TS,
			Skills.ReactJS,
			Skills.Redux,
			Skills.NETWebAPI,
			Skills.GrapesJS,
			Skills.Monaco,
			Skills.Jest,
			Skills.ReactTestingLibrary,
			Skills.SQL,
			Skills.FrontEnd,
			Skills.BackEnd
		],
		image: BoardStudio,
		forceFullWidthImage: true
	},
	{
		order: 2,
		employer: 'VersaDev, LLC',
		name: 'This Portfolio',
		description:
			"Portfolio site to display my abilities. This app shows off my proficiency in planning and developing a professional website using modern technologies. Admittedly, I am not a designer, but with a little help and my skill with development using the MERN stack, I made this project come to life in about a week and a half during my free time.",
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.CSS,
			Skills.TS,
			Skills.ReactJS,
			Skills.MongoDB,
			Skills.NodeJS,
			Skills.ExpressJS,
			Skills.Heroku,
			Skills.FrontEnd,
			Skills.BackEnd
		],
		image: Portfolio,
		forceFullWidthImage: true
	},
	{
		order: 1,
		employer: 'Modzy',
		name: 'Modzy MLOps Web App',
		description:
			"Machine Learning Operations web app for a company called Modzy. In this project, I created charts for data visualization of large datasets, implemented pixel-perfect UI components, and created documentation for each component.",
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.CSS,
			Skills.TS,
			Skills.ReactJS,
			Skills.FrontEnd,
			Skills.D3
		],
		image: Modzy,
		forceFullWidthImage: false
	},
	
	{
		order: 0,
		employer: 'Versatile Development, LLC',
		name: 'PreDiscover Criminal Background Search',
		description:
			"Greenfield Web App & Chrome Extension combo for the Criminal Background Search Industry. PreDiscover is a platform that allows background search companies to automate their searches. It collects the data from county-level courthouse websites, filters out cases, and submits searches to a Case Management software. Searches that took hours can now be done in minutes, if not seconds. This app has active, paying clients.",
		skills: [
			Skills.Web,
			Skills.HTML,
			Skills.CSS,
			Skills.TS,
			Skills.ReactJS,
			Skills.MongoDB,
			Skills.NodeJS,
			Skills.ExpressJS,
			Skills.Heroku,
			Skills.FrontEnd,
			Skills.BackEnd,
		],
		image: PreDiscover,
		forceFullWidthImage: false
	},
];
