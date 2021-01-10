import { Box, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { FullWidthSection } from '../../shared/sections/FullWidthSection/FullWidthSection';
import { useStyles } from './Jumbotron.style';
import JumbotronPic from '../../../assets/img/JumbotronPic.png';

export const Jumbotron: FC = () => {
	const {
		jumbotronContainer,
		leftJumbotronSection,
		rightJumbotronSection,
		jumbotronPic,
		myName,
	} = useStyles();
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () =>
			setWindowWidth(window.innerWidth)
		);
	}, []);

	return (
		<FullWidthSection className={jumbotronContainer}>
			<Box className={leftJumbotronSection}>
				<Typography
					className={myName}
					variant={windowWidth >= 960 ? 'h1' : 'h3'}
					color='textSecondary'
				>
					David Garrett
				</Typography>
				<Subtitle windowWidth={windowWidth} index={1} text='creator.' />
				<Subtitle windowWidth={windowWidth} index={2} text='learner.' />
				<Subtitle windowWidth={windowWidth} index={3} text='mentor.' />
			</Box>
			<Box className={rightJumbotronSection}>
				<img
					className={jumbotronPic}
					src={JumbotronPic}
					alt='jumbotron-pic'
				/>
			</Box>
		</FullWidthSection>
	);
};

const Subtitle: FC<{ windowWidth: number; text: string; index: number }> = ({
	windowWidth,
	text,
	index,
}) => {
	const { subtitle } = useStyles();
	const [display, setDisplay] = useState<boolean>(false);
	setTimeout(() => setDisplay(true), index * 1000);
	return (
		<Typography
			className={subtitle}
			variant={windowWidth >= 960 ? 'h3' : 'h4'}
			style={{ opacity: display ? 1 : 0 }}
			color='secondary'
		>
			{text}
		</Typography>
	);
};
