import React, { FC } from 'react';
import { useStyles } from './NavLink.style';
import { Link } from 'react-scroll';
import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link';

export const NavLink: FC<ReactScrollLinkProps> = ({ to, children }) => {
	const { link } = useStyles();

	return (
		<Link
			className={link}
			to={to}
			spy={true}
			smooth='easeInOutQuad'
			offset={-70}
			duration={1000}
			containerId='app-content-container'
		>
			{children && children}
			{!children && to}
		</Link>
	);
};
