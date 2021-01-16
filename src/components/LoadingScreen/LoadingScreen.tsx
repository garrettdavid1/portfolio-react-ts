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
	const { loadingScreenContainer, closing, loadingBarContainer, loadingBar } = useStyles();
	const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);
	const [imagesLoaded, setImagesLoaded] = useState<number>(0);

	const closeLoadingScreen = () => {
		setAllImagesLoaded(true);
		setTimeout(() => continueToApp(), 2000);
	}

	useEffect(() => {
		const startLoadTime = new Date().getTime();
		Startup.registerForImageLoadUpdates(
			setImagesLoaded, 
			() => {
				const timeLeft = new Date().getTime() - startLoadTime;
				if(timeLeft < 2000) setTimeout(closeLoadingScreen, timeLeft);
				else closeLoadingScreen();
			}
		);
	}, []);

	return (
		<Box className={clsx(loadingScreenContainer, {[closing]: allImagesLoaded})}>
			<Image src={LoadingScreenText} alt='loading-screen-img-waking-david-up' width='25%' />
			{ Startup.imagesExpected > 0 && 
				<Box className={loadingBarContainer}>
					<Box className={loadingBar} style={{width: `${(imagesLoaded / Startup.imagesExpected) * 100}%`}} />
				</Box>
			}
		</Box>
	)
}