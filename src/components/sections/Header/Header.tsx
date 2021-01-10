import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { FullWidthSection } from '../../shared/sections/FullWidthSection/FullWidthSection';
import { useStyles } from './Header.style';
import LogoSvg from '../../../assets/img/Logo.svg';
import { NavLink } from './NavLink/NavLink';
import { animateScroll as scroll } from 'react-scroll';

export const Header: FC = () => {
	const { container, leftSection, rightSection, logo } = useStyles();
	const scrollToTop = () => scroll.scrollToTop({ containerId: 'app-content-container', duration: 1000, smooth: 'easeInOutQuad' })
	return (
		<Box className={container} component='header'>
			<Box className={leftSection}>
				<img className={logo} src={LogoSvg} alt='logo' width='100%' height='100%' onClick={scrollToTop} />
			</Box>
			<Box className={rightSection}>
				<NavLink text='about'/>
				<NavLink text='projects'/>
				<NavLink text='services'/>
				<NavLink text='connect'/>
			</Box>
		</Box>
	)
}