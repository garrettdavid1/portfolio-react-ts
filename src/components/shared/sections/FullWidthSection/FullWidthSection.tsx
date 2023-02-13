import { Box, BoxProps } from '@material-ui/core';
import React, { FC } from 'react';

import { useStyles } from './FullWidthSection.style';

export const FullWidthSection: FC<BoxProps> = ({ children, ...rest }) => {
	const { fullWidthSection } = useStyles();

	return <Box component='section' className={fullWidthSection} {...rest}>{children}</Box>;
}