import { Box, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { TitledSection } from '../../shared/sections/TitledSection/TitledSection';
import { useStyles } from './Services.style';
import { Service, services } from './Services.data';
import { Image } from '../../shared/Image/Image';
import { BrowserView, MobileView } from 'react-device-detect';

export const Services: FC = () => {
	const { servicesContentContainer } = useStyles({})();

	return (
		<TitledSection title='services'>
			<Box className={servicesContentContainer}>
				{services.map((service: Service) => (
					<ServiceSection
						service={service}
						key={`${service.name}-service-section`}
					/>
				))}
			</Box>
		</TitledSection>
	);
};

const ServiceSection: FC<{ service: Service }> = ({ service }) => {
	const { image, imageWithoutArrow, imageSide, name, text } = service;
	const {
		serviceSectionContainer,
		imageContainer,
		mobileImageContainer,
		infoContainer,
		heading,
	} = useStyles({ imageSide })();
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	useEffect(
		() =>
			window.addEventListener('resize', () =>
				setWindowWidth(window.innerWidth)
			),
		[]
	);

	if (windowWidth < 830) {
		const img = (
			<Image
				src={imageWithoutArrow}
				alt={`${name}-service-img`}
				height='100%'
			/>
		);
		return (
			<Box className={serviceSectionContainer}>
				<BrowserView viewClassName={imageContainer}>{img}</BrowserView>
				<MobileView viewClassName={mobileImageContainer}>
					{img}
				</MobileView>
				<Box className={infoContainer}>
					<Typography
						className={heading}
						color='textPrimary'
						variant='h5'
					>
						{name}
					</Typography>
					<Typography color='textPrimary' variant='body1'>
						{text}
					</Typography>
				</Box>
			</Box>
		);
	}

	const imgTag = (
		<Box className={imageContainer}>
			<Image src={image} alt={`${name}-service-img`} width='100%' />
		</Box>
	);

	const infoSection = (
		<Box className={infoContainer}>
			<Typography className={heading} color='textPrimary' variant='h5'>
				{name}
			</Typography>
			<Typography color='textPrimary' variant='body1'>
				{text}
			</Typography>
		</Box>
	);

	return (
		<Box className={serviceSectionContainer}>
			{imageSide === 'left' && (
				<React.Fragment>
					{imgTag}
					{infoSection}
				</React.Fragment>
			)}
			{imageSide === 'right' && (
				<React.Fragment>
					{infoSection}
					{imgTag}
				</React.Fragment>
			)}
		</Box>
	);
};
