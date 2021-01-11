import React, { FC } from 'react';
import { useStyles } from './DiagonalDivider.style';
import DiagonalDividerSvg from '../../../../assets/img/dividers/DiagonalDivider.svg';
import { Image } from '../../../shared/Image/Image';

export const DiagonalDivider: FC<{ flipped?: boolean }> = ({
	flipped = false,
}) => {
	const { divider } = useStyles();
	return (
		<Image
			className={divider}
			src={DiagonalDividerSvg}
			alt="diagonal-divider"
			style={{ 
				transform: flipped ? 'rotateZ(180deg)' : '',
				marginBottom: flipped ? '-10px' : 0,
				// marginTop: flipped ? 0 : '-10px',
			}}
		/>
	);
};
