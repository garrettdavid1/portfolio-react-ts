import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { TitledSection } from '../../shared/sections/TitledSection/TitledSection';
import { useStyles } from './Career.style';

export const Career: FC = () => {
	const { careerContentContainer } = useStyles();

	return (
		<TitledSection title='career'>
			<Box className={careerContentContainer}>
			</Box>
		</TitledSection>
	)
}