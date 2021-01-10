import { makeStyles } from "@material-ui/core";
import { flexColCenterCenter, flexRowCenterCenter, flexRowCenterStart, flexColSpaceAroundCenter, fullWidth } from "../../../styles/stylesLib";

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
	},
	projectBox: {
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
	projectHeadingContainer: {
		...fullWidth,
		...flexColCenterCenter,
		textAlign: 'center',
		background: theme.palette.custom.common.darkGray,
		color: theme.palette.custom.common.white,
		borderBottom: `3px solid ${theme.palette.custom.common.orange}`,
		borderRadius: '5px',
		paddingBottom: '8px'
	},
	projectHeading: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '.7rem'
		}
	},
	projectImage: {
		...flexRowCenterCenter,
		...fullWidth,
		height: '270px'
	},
	projectSkillsContainer: {
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
	projectSkill: {
		...flexRowCenterCenter,
		border: `3px solid ${theme.palette.custom.common.darkGray}`,
		padding: '3px',
		marginLeft: '3px',
		marginBottom: '3px',
		borderRadius: '5px',
		height: '32px',
		transition: 'background .7s, border .7s'
	},
	projectSkillDarkMode: {
		border: `3px solid ${theme.palette.custom.common.orange}`,
		borderRadius: '5px',
		background: theme.palette.custom.common.darkGray
	},
	projectInfoOverlay: {
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
	projectDescription: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '.75rem'
		}
	}
}))