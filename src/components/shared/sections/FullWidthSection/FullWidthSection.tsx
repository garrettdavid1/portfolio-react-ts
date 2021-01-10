import { Box, BoxProps } from '@material-ui/core';
import React, { FC } from 'react';
import { fullWidth } from '../../../../styles/stylesLib';

export const FullWidthSection: FC<BoxProps> = ({ children, ...rest }) => <Box component='section' style={{...fullWidth}} {...rest}>{children}</Box>;;