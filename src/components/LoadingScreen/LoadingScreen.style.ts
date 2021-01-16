import { makeStyles } from '@material-ui/core';
import { flexColCenterCenter, fullHeight, fullWidth } from '../../styles/stylesLib';

export const useStyles = makeStyles((theme) => ({
	loadingScreenContainer: {
		...fullWidth,
		...fullHeight,
		...flexColCenterCenter,
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
	},
	loadingBarContainer: {
		width: '25%', 
		height: '30px',
		marginTop: '8px',
		borderRadius: '5px',
		background: 'transparent',
		border: `2px solid ${theme.palette.custom.common.white}`,
		overflow: 'hidden'
	},
	loadingBar: {
		...fullHeight,
		transition: 'width .2s',
		backgroundColor: theme.palette.custom.common.orange
	}
}));
