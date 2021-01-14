import { makeStyles } from "@material-ui/core";
import { flexRowCenterCenter, flexColStartCenter, flexRowStartCenter, fullWidth, halfWidth, flexColCenterCenter, flexRowCenterStart } from "../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	connectContentContainer: {
		...fullWidth,
		...flexColStartCenter,
		paddingTop: '16px',
		paddingBottom: '16px',
		[theme.breakpoints.up(750)]: {
			...flexRowCenterStart,
			paddingTop: '32px',
		}
	},
	formContainer: {
		...flexColStartCenter,
		width: '90%',
		[theme.breakpoints.up('sm')]: {
			width: '80%'
		},
		[theme.breakpoints.up(750)]: {
			width: '60%'
		}
	},
	topFormRow: {
		...flexRowStartCenter,
		...fullWidth
	},
	nameInput: {
		...halfWidth,
	},
	serviceSelectionInput: {
		...halfWidth,
		marginLeft: '8px'
	},
	orangeText: {
		color: theme.palette.custom.common.orange
	},
	dataSentMessageText: {
		opacity: 0,
		paddingTop: '16px',
		color: theme.palette.custom.common.orange,
		transition: 'opacity 2s, paddingTop 2s, paddingBottom 2s'
	},
	dataSentMessageTextFadeIn: {
		opacity: 1,
		paddingTop: 0,
		paddingBottom: '16px'
	},
	submitBtn: {
		width: '150px',
		borderRadius: '1.2em',
		backgroundColor: theme.palette.custom.common.orange,
		color: theme.palette.custom.common.white,
		marginTop: '16px',
		textTransform: 'none',
		fontSize: '1em',
		'&:hover': {
			backgroundColor: '#D75C33',
			color: theme.palette.custom.common.white,
		},
		transition: 'opacity 2s, marginTop 2s',
		'&>.MuiButton-label': {
			height: '40px'
		},
		'&.Mui-disabled': {
			backgroundColor: `${theme.palette.custom.common.orange} !important`,
			color: theme.palette.custom.common.white,
		}
	},
	linkContainer: {
		...flexColCenterCenter,
		width: '40%',
		[theme.breakpoints.up(750)]: {
			height: '262px'
		}
	},
	copyrightContainer: {
		...fullWidth,
		...flexRowCenterCenter
	}
}))