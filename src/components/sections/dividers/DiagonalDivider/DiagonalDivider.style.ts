import { makeStyles } from "@material-ui/core";
import { fullWidth } from "../../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	divider: {
		...fullWidth,
		height: '75px',
		[theme.breakpoints.up('md')]: {
			height: '150px'
		}
	}
}))