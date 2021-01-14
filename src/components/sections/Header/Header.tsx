import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { useStyles } from './Header.style';
import LogoSvg from '../../../assets/img/Logo.svg';
import { NavLink } from './NavLink/NavLink';
import { animateScroll as scroll } from 'react-scroll';
import { Image } from '../../shared/Image/Image';
import clsx from 'clsx';
import FaceIcon from '@material-ui/icons/Face';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import BuildIcon from '@material-ui/icons/Build';
import MessageIcon from '@material-ui/icons/Message';

export const Header: FC = () => {
	const { container, leftSection, rightSection, textLinkSection, iconLinkSection, logo } = useStyles();
	const scrollToTop = () => scroll.scrollToTop({ containerId: 'app-content-container', duration: 1000, smooth: 'easeInOutQuad' })
	return (
		<Box className={container} component='header'>
			<Box className={leftSection}>
				<Image className={logo} src={LogoSvg} alt='logo' height='100%' onClick={scrollToTop} />
			</Box>
			<Box className={clsx(rightSection, textLinkSection)}>
				<NavLink to='about'/>
				<NavLink to='projects'/>
				<NavLink to='services'/>
				<NavLink to='connect'/>
			</Box>
			<Box className={clsx(rightSection, iconLinkSection)}>
				<NavLink to='about'><FaceIcon/></NavLink>
				<NavLink to='projects'><FormatListNumberedIcon /></NavLink>
				<NavLink to='services'><BuildIcon /></NavLink>
				<NavLink to='connect'><MessageIcon /></NavLink>
			</Box>
		</Box>
	)
}