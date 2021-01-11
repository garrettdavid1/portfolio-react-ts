import { makeStyles } from "@material-ui/core";
import { fullWidth } from "../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	aboutContentContainer: {
		...fullWidth,
		padding: '16px',
		paddingBottom: 0,
		[theme.breakpoints.up('md')]: {
			paddingLeft: 0,
			paddingRight: 0
		}
	},
	text: {
		display: 'inline',
		lineHeight: '38px',
		[theme.breakpoints.up('sm')]: {
			lineHeight: '50px'
		},
		[theme.breakpoints.up('md')]: {
			lineHeight: '60px'
		}
	},
	specialText: {
		color: theme.palette.custom.common.orange,
		'&.top-quality-text': {
			fontFamily: '"Sree Krushnadevaraya"'
		},
		'&.beautiful-text': {
			fontFamily: '"Dancing Script", cursive'
		},
		'&.your-goals-text': {
			fontFamily: 'Montserrat, sans-serif'
		}
	}
}))