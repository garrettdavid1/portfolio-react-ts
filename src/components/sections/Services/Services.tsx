import { Box, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { TitledSection } from '../../shared/sections/TitledSection/TitledSection';
import { useStyles } from './Services.style';
import { Service, services } from './Services.data';
import {
	flexColCenterEnd,
	flexColCenterStart,
	flexRowEndCenter,
	flexRowStartCenter,
} from '../../../styles/stylesLib';
import { Image } from '../../shared/Image/Image';

export const Services: FC = () => {
	const { servicesContentContainer } = useStyles();

	return (
		<TitledSection title="services">
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
	const {
		serviceSectionContainer,
		imageContainer,
		infoContainer,
		heading
	} = useStyles();
	const { image, imageWithoutArrow, imageSide, name, text } = service;
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	useEffect(
		() =>
			window.addEventListener('resize', () =>
				setWindowWidth(window.innerWidth)
			),
		[]
	);

	if (windowWidth < 830) {
		return (
			<Box className={serviceSectionContainer}>
				<Box className={imageContainer}>
					<Image
						src={imageWithoutArrow}
						alt={`${name}-service-img`}
						height="100%"
					/>
				</Box>
				<Box className={infoContainer}>
					<Typography
						className={heading}
						color="textPrimary"
						variant="h5"
					>
						{name}
					</Typography>
					<Typography color="textPrimary" variant="body1">
						{text}
					</Typography>
				</Box>
			</Box>
		);
	}

	const imgContainerFlexStyle =
		imageSide === 'left' ? flexRowEndCenter : flexRowStartCenter;
	const imgTag = (
		<Box className={imageContainer} style={{ ...imgContainerFlexStyle }}>
			<Image src={image} alt={`${name}-service-img`} width="100%" />
		</Box>
	);

	const infoContainerFlexStyle =
		imageSide === 'left' ? flexColCenterStart : flexColCenterEnd;
	const infoSection = (
		<Box className={infoContainer} style={{ ...infoContainerFlexStyle }}>
			<Typography className={heading} color="textPrimary" variant="h5">
				{name}
			</Typography>
			<Typography color="textPrimary" variant="body1">
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
