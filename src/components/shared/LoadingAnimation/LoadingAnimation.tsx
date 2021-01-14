import React, { FC } from 'react';
import './LoadingAnimation.css';

export const LoadingAnimation: FC = () => {
	return (
		<div className='lds-roller'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
