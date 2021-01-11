import React, { FC } from 'react';
import { useStyles } from './LineDivider.style';
import LongLineSvg from '../../../../assets/img/dividers/LongLine.svg';
import ShortLineSvg from '../../../../assets/img/dividers/ShortLine.svg';
import CircleSvg from '../../../../assets/img/dividers/Circle.svg';
import { Box } from '@material-ui/core';
import { Image } from '../../../shared/Image/Image';

export const LineDivider: FC<{ flipped?: boolean }> = ({ flipped = false }) => {
	const { lineDividerContainer, lineContainer, longLine, shortLine, circle } = useStyles();
	return (
		<Box className={lineDividerContainer} style={{transform: flipped ? 'rotateZ(180deg)' : ''}}>
			<Box className={lineContainer}>
				<Image
					className={longLine}
					src={LongLineSvg}
					alt="line-in-line-divider"
				/>
				<Image
					className={circle}
					src={CircleSvg}
					alt="circle-in-line-divider"
				/>
			</Box>
			<Box className={lineContainer}>
				<Image
					className={shortLine}
					src={ShortLineSvg}
					alt="line-in-line-divider"
				/>
				<Image
					className={circle}
					src={CircleSvg}
					alt="circle-in-line-divider"
				/>
			</Box>
		</Box>
	);
};
