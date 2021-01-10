import { makeStyles } from "@material-ui/core";
import { flexColStartStart, flexRowStartCenter, fullWidth } from "../../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	lineDividerContainer: {
		...fullWidth,
		...flexColStartStart,
		paddingTop: '8px',
		paddingBottom: '8px'
	},
	lineContainer: {
		...fullWidth,
		...flexRowStartCenter
	},
	longLine: {
		width: '80%',
		height: '20px',
		[theme.breakpoints.up('md')]: {
			height: '30px'
		}
	},
	shortLine: {
		width: '70%',
		height: '20px',
		[theme.breakpoints.up('md')]: {
			height: '30px'
		}
	},
	circle: {
		height: '20px',
		width: '20px',
		marginLeft: '-5px',
		[theme.breakpoints.up('md')]: {
			height: '30px',
			width: '30px',
			marginLeft: '-10px'
		}
	}
}))