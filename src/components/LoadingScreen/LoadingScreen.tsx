import { Box, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import Startup from '../../util/StartupMonitor';
import { useStyles } from './LoadingScreen.style';
import clsx from 'clsx';

interface LoadingScreenProps {
	continueToApp: () => void;
}
export const LoadingScreen: FC<LoadingScreenProps> = ({ continueToApp }) => {
	const { loadingScreenContainer, closing } = useStyles();
	const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	const closeLoadingScreen = () => {
		setAllImagesLoaded(true);
		setTimeout(() => continueToApp(), 1000);
	}

	useEffect(() => {
		window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
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
			window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
		}
	}, []);

	return (
		<Box className={clsx(loadingScreenContainer, {[closing]: allImagesLoaded})}>
			<Typography variant={windowWidth > 400 ? 'h3' : 'h4'} color='textSecondary'>Waking David up...</Typography>
		</Box>
	)
}