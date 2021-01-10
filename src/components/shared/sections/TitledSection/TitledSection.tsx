import { BoxProps, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { colors } from '../../../../constants/colors';
import { FullWidthSection } from '../FullWidthSection/FullWidthSection';
import { useStyles } from './TitledSection.style';
import clsx from 'clsx';

export const TitledSection: FC<BoxProps & {title: string, mode?: 'light' | 'dark'}> = ({ title, mode = 'light', children, ...rest }) => {
	const { titledSection } = useStyles();
	return (
		<FullWidthSection 
			id={title} 
			className={clsx(titledSection, rest.className)} 
			style={{
				backgroundColor: mode === 'light' ? colors.white : colors.darkGray,
			}}
			{...rest}
		>
			<Typography variant='h3' color={mode === 'light' ? 'textPrimary' : 'textSecondary'}>{title}</Typography>
			{children}
		</FullWidthSection>
	)
}