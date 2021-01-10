import { Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useStyles } from './ConnectLink.style';

interface ConnectLinkProps {
	link: string;
	image: string;
	text: string;
	textMarginRight?: string;
}

export const ConnectLink: FC<ConnectLinkProps> = ({ link, image, text, textMarginRight = '0px'}) => {
	const { linkContainer, linkText } = useStyles();
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className={linkContainer}
		>
			<img src={image} alt={`${text}-link-img`} />
			<Typography className={linkText} variant='h6' color='textSecondary' style={{marginRight: textMarginRight}}>
				{text}
			</Typography>
		</a>
	);
};
