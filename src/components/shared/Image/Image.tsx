import React, { FC, useEffect } from 'react';
import Startup from '../../../util/StartupMonitor';

export const Image: FC<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({alt, ...rest}) => {
	useEffect(() => Startup.registerImage(), []);
	return <img alt={alt} {...rest} onLoad={Startup.incrementImagesLoaded} />;
}