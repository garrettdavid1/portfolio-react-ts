import { makeStyles } from '@material-ui/core';
import { flexRowCenterCenter } from '../../../../styles/stylesLib';

export const useStyles = makeStyles((theme) => ({
	linkContainer: {
		...flexRowCenterCenter,
		marginBottom: '16px',
		width: '100%',
		transition: 'all .2s ease-in-out',
		'&:hover': { transform: 'scale(1.1)' }
	},
	linkText: { marginLeft: '16px' },
}));
