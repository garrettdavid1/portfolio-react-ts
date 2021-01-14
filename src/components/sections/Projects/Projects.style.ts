import { makeStyles } from "@material-ui/core";
import { flexColCenterCenter, flexRowCenterCenter, flexRowCenterStart, fullWidth } from "../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	projectsContentContainer: {
		...fullWidth,
		...flexColCenterCenter,
		paddingTop: '16px'
	},
	tagFilterBtnContainer: {
		...flexRowCenterStart,
		flexWrap: 'wrap',
		width: '90%',
	},
	tagFilterBtn: {
		...flexRowCenterCenter,
		fontWeight: 'bold',
		marginLeft: '16px',
		marginBottom: '8px',
		cursor: 'pointer',
		padding: '5px',
		boxShadow: `3px -3px 3px ${theme.palette.custom.common.lightGray}`,
		border: `1px solid ${theme.palette.custom.common.darkGray}`,
		background: theme.palette.custom.common.white,
		color: theme.palette.custom.common.darkGray,
		'&:hover': {
			background: theme.palette.custom.common.darkGray,
			color: theme.palette.custom.common.orange,
		},
		'&.active': {
			background: theme.palette.custom.common.darkGray,
			color: theme.palette.custom.common.orange,
			boxShadow: `1px 0px 1px ${theme.palette.custom.common.lightGray}`,
			transform: 'translateY(-2px)'
		}
	},
	projectListContainer: {
		...flexRowCenterStart,
		flexWrap: 'wrap',
		width: '100%',
		paddingTop: '32px'
	}
}))