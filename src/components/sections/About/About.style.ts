import { makeStyles } from "@material-ui/core";
import { flexColCenterCenter, fullWidth } from "../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	aboutContentContainer: {
		...fullWidth,
		...flexColCenterCenter,
		paddingTop: '16px'
	},
	aboutContent: {
		width: '90%',
		textAlign: 'left',
		[theme.breakpoints.up('sm')]: {
			width: '80%'
		},
		[theme.breakpoints.up('md')]: {
			width: '70%'
		},
		[theme.breakpoints.up('lg')]: {
			width: '60%'
		}
	}
}))