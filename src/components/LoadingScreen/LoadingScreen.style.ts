import { makeStyles } from '@material-ui/core';
import { flexRowCenterCenter, fullHeight, fullWidth } from '../../styles/stylesLib';

export const useStyles = makeStyles((theme) => ({
	loadingScreenContainer: {
		...fullWidth,
		...fullHeight,
		...flexRowCenterCenter,
		backgroundColor: theme.palette.custom.common.darkGray,
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 1000,
		textAlign: 'center',
		transition: 'margin-top 1s ease-in',
		borderBottom: `3px solid ${theme.palette.custom.common.orange}`
	},
	closing: {
		marginTop: '-100vh'
	}
}));
