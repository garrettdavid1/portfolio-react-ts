import { makeStyles } from "@material-ui/core";
import {
	flexCol,
	flexColCenterCenter,
	flexColCenterEnd,
	flexColCenterStart,
	flexRowCenterCenter,
	flexRowEndCenter,
	flexRowStartCenter,
	fullWidth,
} from '../../../styles/stylesLib';

export const useStyles = (props: { imageSide?: 'left' | 'right'}) => makeStyles((theme) => ({
	servicesContentContainer: {
		...fullWidth,
		...flexColCenterCenter,
		paddingTop: '16px',
		paddingBottom: '16px'
	},
	serviceSectionContainer: {
		...flexColCenterCenter,
		width: '95%',
		marginTop: '32px',
		[theme.breakpoints.up(830)]: {
			...flexRowCenterCenter,
			width: '100%',
			minHeight: '300px'
		},
		[theme.breakpoints.up('lg')]: {
			width: '90%',
			marginTop: '64px'
		}
	},
	imageContainer: {
		...flexRowCenterCenter,
		...( props.imageSide === undefined ? {} : props.imageSide === 'left' ? flexRowEndCenter : flexRowStartCenter ),
		width: '95%',
		height: '200px',
		[theme.breakpoints.up(830)]: {
			height: '100%',
			width: '40%',
			marginTop: '-100px',
		},
		[theme.breakpoints.up('md')]: {
			width: '30%'
		}
	},
	mobileImageContainer: {
		height: '100px'
	},
	heading: {
		fontWeight: 700
	},
	infoContainer: {
		width: '95%',
		...( props.imageSide === undefined ? {} : props.imageSide === 'left' ? flexColCenterStart : flexColCenterEnd ),
		[theme.breakpoints.up(830)]: {
			...flexCol,
			width: '80%',
			height: '100%',
			paddingLeft: '64px',
			paddingRight: '64px',
		},
		[theme.breakpoints.up('md')]: {
			width: '60%'
		},
		[theme.breakpoints.up('xl')]: {
			width: '50%'
		}
	}
}))