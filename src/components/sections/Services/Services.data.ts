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
		text: `oaiasd fspodafi spaodf isadp[fo isdapofi sadp[fio sadp[fio sadp[foi sadp[fo isadpof isadpof asdfsdaf
			asoid fjoisda fspodaf isapodfi asdpofi aspod fiaspodf isapdf isapod fspad[ fiasodpf isadpofi sa[dpif pasd fi
			sdapfo isad[pfoi asdfopj sadklfjhsad flkhsadoifh sdalfih sdaoiufh sdafuh sadiufh sdafiuhgsa dfiouh sadifu h
			sadfui hsdafk hsdafsa dhf skdaj`,
		image: MentoringIcon,
		imageWithoutArrow: MentoringNoArrow,
		imageSide: 'left'
	},
	{
		name: 'Web Development',
		text: `oaiasd fspodafi spaodf isadp[fo isdapofi sadp[fio sadp[fio sadp[foi sadp[fo isadpof isadpof asdfsdaf
			asoid fjoisda fspodaf isapodfi asdpofi aspod fiaspodf isapdf isapod fspad[ fiasodpf isadpofi sa[dpif pasd fi
			sdapfo isad[pfoi asdfopj sadklfjhsad flkhsadoifh sdalfih sdaoiufh sdafuh sadiufh sdafiuhgsa dfiouh sadifu h
			sadfui hsdafk hsdafsa dhf skdaj`,
		image: WebDevIcon,
		imageWithoutArrow: WebDevNoArrow,
		imageSide: 'right'
	},
	{
		name: 'Bug Fixing',
		text: `oaiasd fspodafi spaodf isadp[fo isdapofi sadp[fio sadp[fio sadp[foi sadp[fo isadpof isadpof asdfsdaf
			asoid fjoisda fspodaf isapodfi asdpofi aspod fiaspodf isapdf isapod fspad[ fiasodpf isadpofi sa[dpif pasd fi
			sdapfo isad[pfoi asdfopj sadklfjhsad flkhsadoifh sdalfih sdaoiufh sdafuh sadiufh sdafiuhgsa dfiouh sadifu h
			sadfui hsdafk hsdafsa dhf skdaj`,
		image: BugFixIcon,
		imageWithoutArrow: BugFixNoArrow,
		imageSide: 'left'
	},
]