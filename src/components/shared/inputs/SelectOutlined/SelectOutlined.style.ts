import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	selectRoot: {
		padding: '10.5px 14px'
	},
	inputRoot: {
		color: `${theme.palette.custom.common.darkGray}`,
		backgroundColor: theme.palette.custom.common.white,
		borderRadius: '1em',
		'&.Mui-error>fieldset': {
			border: '3px solid red',
		},
	},
	labelFocus: {
		color: 'transparent'
	},
	labelRoot: {
		padding: '0 5px',
		color: 'rgba(0, 0, 0, .54)',
		'&$labelFocus': {
			display: 'none',
			color: theme.palette.custom.common.darkGray
		}
	}
}))