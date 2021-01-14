import { makeStyles } from '@material-ui/core';
import { fullHeight, fullWidth } from '../../styles/stylesLib';

export const useStyles = makeStyles((theme) => ({
	appContainer: {
		...fullWidth,
		...fullHeight,
		overflow: 'hidden',
		position: 'fixed'
	},
	contentContainer: {
		...fullWidth,
		...fullHeight,
		overflowY: 'scroll',
		overflowX: 'hidden',
		paddingTop: '50px',
		background: theme.palette.custom.common.white,
		overscrollBehaviorY: 'contain',
		'&::-webkit-overscroll-behavior': 'contain',
		[theme.breakpoints.up('md')]: {
			paddingTop: '75px',
		},
	},
	'@global': {
		'*::-webkit-scrollbar': {
			width: '0.5em'
		},
		'*::-webkit-scrollbar-track': {
			backgroundColor: theme.palette.custom.common.darkGray
		},
		'*::-webkit-scrollbar-thumb': {
			backgroundColor: theme.palette.custom.common.orange,
			outline: `1px solid ${theme.palette.custom.common.orange}`
		}
	},
}));
