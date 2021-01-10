import React, { FC } from 'react';
import { useStyles } from './NavLink.style';
import { Link } from 'react-scroll';

export const NavLink: FC<{ text: string }> = ({ text }) => {
	const { link } = useStyles();

	return (
		<Link
			className={link}
			to={text}
			spy={true}
			smooth='easeInOutQuad'
			offset={-70}
			duration={1000}
			containerId='app-content-container'
		>
			{text}
		</Link>
	);
};
