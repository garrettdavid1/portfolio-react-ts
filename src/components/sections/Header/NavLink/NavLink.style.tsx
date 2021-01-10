import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.palette.custom.common.orange,
		fontSize: '2em',
		fontWeight: 'bold',
		marginLeft: '32px',
		cursor: 'pointer',
		[theme.breakpoints.up('sm')]: {
			marginLeft: '48px',
		},
		[theme.breakpoints.up('md')]: {
			marginLeft: '64px',
		},
	}
}))