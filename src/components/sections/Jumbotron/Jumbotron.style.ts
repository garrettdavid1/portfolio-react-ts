import { makeStyles } from "@material-ui/core";
import { flexColCenterStart, flexRowCenterCenter } from "../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	jumbotronContainer: {
		...flexRowCenterCenter,
		position: 'relative',
		height: 'calc(100% - 50px)',
		background: theme.palette.custom.common.darkGray,
		[theme.breakpoints.up('md')]: {
			height: 'calc(100% - 150px)'
		}
	},
	leftJumbotronSection: {
		...flexColCenterStart,
		height: '80vh',
		paddingLeft: '16px',
		[theme.breakpoints.up('sm')]: {
			paddingLeft: 0,
			paddingRight: '64px'
		}
	},
	rightJumbotronSection: {
		...flexRowCenterCenter,
		height: '50vh',
		width: '30vw',
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'flex'
		}
	},
	jumbotronPic: {
		height: '20vw',
		width: '30vw',
		boxShadow: 'calc(4vw) calc(-4vw) rgb(18, 19, 22)'
	},
	myName: {
		fontWeight: 400
	},
	subtitle: { transition: 'opacity 3s'}
}))