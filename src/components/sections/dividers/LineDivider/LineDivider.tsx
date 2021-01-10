import React, { FC } from 'react';
import { useStyles } from './LineDivider.style';
import LongLineSvg from '../../../../assets/img/dividers/LongLine.svg';
import ShortLineSvg from '../../../../assets/img/dividers/ShortLine.svg';
import CircleSvg from '../../../../assets/img/dividers/Circle.svg';
import { Box } from '@material-ui/core';

export const LineDivider: FC<{ flipped?: boolean }> = ({ flipped = false }) => {
	const { lineDividerContainer, lineContainer, longLine, shortLine, circle } = useStyles();
	return (
		<Box className={lineDividerContainer} style={{transform: flipped ? 'rotateZ(180deg)' : ''}}>
			<Box className={lineContainer}>
				<img
					className={longLine}
					src={LongLineSvg}
					alt="line-in-line-divider"
				/>
				<img
					className={circle}
					src={CircleSvg}
					alt="circle-in-line-divider"
				/>
			</Box>
			<Box className={lineContainer}>
				<img
					className={shortLine}
					src={ShortLineSvg}
					alt="line-in-line-divider"
				/>
				<img
					className={circle}
					src={CircleSvg}
					alt="circle-in-line-divider"
				/>
			</Box>
		</Box>
	);
};
