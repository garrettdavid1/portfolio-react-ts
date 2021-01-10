import { makeStyles } from "@material-ui/core";
import { flexColStart } from "../../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	titledSection: {
		...flexColStart,
		padding: '16px',
		paddingTop: '32px',
		paddingBottom: '32px',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		[theme.breakpoints.up('md')]: {
			padding: '128px',
			paddingTop: '64px',
			paddingBottom: '64px'
		}
	}
}))