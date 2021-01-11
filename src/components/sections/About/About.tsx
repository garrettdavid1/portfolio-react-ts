import { Box, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { TitledSection } from '../../shared/sections/TitledSection/TitledSection';
import { useStyles } from './About.style';
import clsx from 'clsx';

export const About: FC = () => {
	const { aboutContentContainer, text, specialText } = useStyles();

	const getTextComponentVariant = (windowWidth: number) =>
		windowWidth > 400 ? 'h5' : 'body1';
	const getSpecialTextComponentVariant = (windowWidth: number) =>
		windowWidth > 400 ? 'h3' : 'h5';

	const [textComponentVariant, setTextComponentVariant] = useState<
		'h5' | 'body1'
	>(getTextComponentVariant(window.innerWidth));
	const [
		specialTextComponentVariant,
		setSpecialTextComponentVariant,
	] = useState<'h3' | 'h5'>(
		getSpecialTextComponentVariant(window.innerWidth)
	);

	useEffect(() => window.addEventListener('resize', () => {
		setTextComponentVariant(getTextComponentVariant(window.innerWidth));
		setSpecialTextComponentVariant(getSpecialTextComponentVariant(window.innerWidth));
	}), [])

	const text1 = `A naturally curious and stubbornly determined student, I find joy on both sides of the development coin. Whether you need a `;
	const text2 = `, fully functional web app, a simple yet `;
	const text3 = ` website, or someone to help clear the fog in your own development journey, I can be a valuable asset. I take a deep, holistic approach to any request, gathering as much knowledge as necessary to truly understand `;
	const text4 = `. From there, I develop a concrete plan, keep you in the loop, and deliver on my commitments. So if you're ready to start seeing real results, give me a shout, and let's knock it out together. I can't wait to see what we create!`;

	return (
		<TitledSection title='about'>
			<Box className={aboutContentContainer}>
				<Typography className={text} variant={textComponentVariant}>
					{text1}
				</Typography>
				<Typography
					className={clsx(text, specialText, 'top-quality-text')}
					variant={specialTextComponentVariant}
				>
					TOP QUALITY
				</Typography>
				<Typography className={text} variant={textComponentVariant}>
					{text2}
				</Typography>
				<Typography
					className={clsx(text, specialText, 'beautiful-text')}
					variant={specialTextComponentVariant}
				>
					beautiful
				</Typography>
				<Typography className={text} variant={textComponentVariant}>
					{text3}
				</Typography>
				<Typography
					className={clsx(text, specialText, 'your-goals-text')}
					variant={specialTextComponentVariant}
					style={{ textDecoration: 'underline' }}
				>
					YOUR
				</Typography>
				<Typography
					className={clsx(text, specialText, 'your-goals-text')}
					variant={specialTextComponentVariant}
				>
					{' '}
					GOALS
				</Typography>
				<Typography className={text} variant={textComponentVariant}>
					{text4}
				</Typography>
			</Box>
		</TitledSection>
	);
};
