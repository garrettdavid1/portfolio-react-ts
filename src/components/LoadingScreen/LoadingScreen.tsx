import { Box } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import Startup from '../../util/StartupMonitor';
import { useStyles } from './LoadingScreen.style';
import clsx from 'clsx';
import { Image } from '../shared/Image/Image';
import LoadingScreenText from '../../assets/img/LoadingScreenText.svg';

interface LoadingScreenProps {
	continueToApp: () => void;
}
export const LoadingScreen: FC<LoadingScreenProps> = ({ continueToApp }) => {
	const { loadingScreenContainer, closing } = useStyles();
	const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);

	const closeLoadingScreen = () => {
		setAllImagesLoaded(true);
		setTimeout(() => continueToApp(), 1000);
	}

	useEffect(() => {
		let loadingTime = 0;
		const loadingCheck = setInterval(() => {
			loadingTime += 50;
			if(Startup.allImagesLoaded) {
				clearInterval(loadingCheck);
				if(loadingTime >= 1000) closeLoadingScreen();
				else setTimeout(closeLoadingScreen, 1000 - loadingTime);
			}
		}, 50);

		return () => {
			clearInterval(loadingCheck);
		}
	}, []);

	return (
		<Box className={clsx(loadingScreenContainer, {[closing]: allImagesLoaded})}>
			<Image src={LoadingScreenText} alt='loading-screen-img-waking-david-up' width='25%' />
		</Box>
	)
}