import { makeStyles } from "@material-ui/core";
import { flexColCenterCenter, flexRowCenterCenter, flexColSpaceAroundCenter, fullWidth } from "../../../../styles/stylesLib";

export const useStyles = makeStyles((theme) => ({
	projectCard: {
		position: 'relative',
		minWidth: '300px',
		borderRadius: '5px',
		width: '33%',
		maxWidth: '500px',
		overflow: 'hidden',
		background: theme.palette.custom.common.white,
		border: `1px solid ${theme.palette.custom.common.lightGray}`,
		marginBottom: '16px',
		[theme.breakpoints.up('sm')]: {
			marginLeft: '16px',
		},
		[theme.breakpoints.up('md')]: {
			marginLeft: '32px',
			marginBottom: '32px'
		},
		boxShadow: `5px -5px 5px ${theme.palette.custom.common.lightGray}`,
	},
	headingContainer: {
		...fullWidth,
		...flexColCenterCenter,
		textAlign: 'center',
		background: theme.palette.custom.common.darkGray,
		color: theme.palette.custom.common.white,
		borderBottom: `3px solid ${theme.palette.custom.common.orange}`,
		borderRadius: '5px',
		paddingBottom: '8px',
		marginBottom: '16px'
	},
	projectImage: {
		...flexRowCenterCenter,
		...fullWidth,
		height: '270px',
		position: 'relative',
		overflow: 'hidden'
	},
	skillsContainer: {
		...flexRowCenterCenter,
		...fullWidth,
		flexWrap: 'wrap',
		minHeight: '125px',
		padding: '8px',
		borderTop: `2px solid ${theme.palette.custom.common.darkGray}`,
		transition: 'background .7s'
	},
	skillsContainerDarkMode: {
		background: theme.palette.custom.common.darkGray
	},
	indivSkill: {
		...flexRowCenterCenter,
		border: `3px solid ${theme.palette.custom.common.darkGray}`,
		padding: '3px',
		marginLeft: '3px',
		marginBottom: '3px',
		borderRadius: '5px',
		height: '32px',
		transition: 'background .7s, border .7s'
	},
	indivSkillDarkMode: {
		border: `3px solid ${theme.palette.custom.common.orange}`,
		borderRadius: '5px',
		background: theme.palette.custom.common.darkGray
	},
	infoOverlay: {
		...flexColSpaceAroundCenter,
		width: '100%',
		height: '270px',
		top: 0,
		left: 0,
		padding: '16px',
		zIndex: 2,
		background: 'rgba(40, 44, 52, 70)',
		position: 'absolute',
		transition: 'opacity .7s',
	},
	descriptionContainer: {
		...flexColCenterCenter,
		width: '100%',
		flex: '1',
		overflowY: 'auto',
	},
	description: {
		height: '100%',
		textAlign: 'center'
	},
	cancelDetailsViewBtn: {
		position: 'absolute',
		top: 8,
		right: 8,
		color: theme.palette.custom.common.white,
		padding: 0,
		minWidth: 'unset',
		'& > .MuiButton-label': {
			width: '24px',
			height: '24px'
		}
	}
}))