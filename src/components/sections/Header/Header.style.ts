import { makeStyles } from "@material-ui/core";
import { flexRowEndCenter, flexRowSpaceBetweenCenter, fullHeight } from "../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	container: {
		...flexRowSpaceBetweenCenter,
		width: '100vw',
		position: 'fixed',
		top: 0,
		left: 0,
		height: '50px',
		background: theme.palette.custom.common.darkGray,
		padding: '8px',
		zIndex: 10,
		paddingRight: '24px',
		[theme.breakpoints.up('sm')]: {
			paddingRight: '24px'
		},
		[theme.breakpoints.up('md')]: {
			height: '75px',
			paddingLeft: '24px',
			paddingRight: '48px'
		}
	},
	leftSection: {
		...fullHeight
	},
	rightSection: {
		...fullHeight,
		...flexRowEndCenter,
		[theme.breakpoints.down(770)]: {
			display: 'none'
		}
	},
	textLinkSection: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		}
	},
	iconLinkSection: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		}
	},
	logo: {
		cursor: 'pointer'
	}
}))