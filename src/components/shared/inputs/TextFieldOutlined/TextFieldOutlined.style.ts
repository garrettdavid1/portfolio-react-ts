import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	inputRoot: {
		color: `${theme.palette.custom.common.darkGray}`,
		backgroundColor: theme.palette.custom.common.white,
		borderRadius: '1em',
		'&.Mui-error>fieldset': {
			border: '3px solid red',
		},
	},
}));
