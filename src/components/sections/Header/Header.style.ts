import { makeStyles } from "@material-ui/core";
import { flexRowEndCenter, flexRowSpaceBetweenCenter, fullHeight } from "../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	container: {
		...flexRowSpaceBetweenCenter,
		width: 'calc(100vw - .5em)',
		position: 'fixed',
		top: 0,
		left: 0,
		height: '50px',
		background: theme.palette.custom.common.darkGray,
		padding: '8px',
		zIndex: 10,
		[theme.breakpoints.up('sm')]: {
			height: '100px',
			paddingLeft: '24px',
			paddingRight: '48px'
		},
		[theme.breakpoints.up('md')]: {
			paddingRight: '96px'
		},
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
	logo: {
		cursor: 'pointer'
	}
}))