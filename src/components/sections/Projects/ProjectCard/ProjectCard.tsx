import { Box, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC } from 'react';
import { Project } from '../Projects.data';
import { useStyles } from './ProjectCard.style';
import { Image } from '../../../shared/Image/Image';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {BrowserView, MobileView} from 'react-device-detect';

interface ProjectCardProps {
	proj: Project;
	isHoveredProject: boolean;
	setHoveredProject: (name: string) => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({ proj, isHoveredProject, setHoveredProject }) => {
	const {
		projectCard,
		infoOverlay,
		headingContainer,
		descriptionContainer,
		description,
		projectImage,
		skillsContainer,
		skillsContainerDarkMode,
		indivSkill,
		indivSkillDarkMode,
		cancelDetailsViewBtn
	} = useStyles();

	return (
		<Box
			className={projectCard}
			key={`project-box-${proj.order}`}
			onMouseOver={() => setHoveredProject(proj.name)}
			onMouseOut={() => setHoveredProject('')}
		>
			<Box
				className={infoOverlay}
				style={{
					opacity: isHoveredProject ? 1 : 0,
				}}
			>
				<Box className={headingContainer}>
					<BrowserView>
						<Typography variant='h6'>
							{proj.name}
						</Typography>
					</BrowserView>
					<MobileView>
						<Typography variant='h5'>
							{proj.name}
						</Typography>
						<Button className={cancelDetailsViewBtn} onClick={() => setHoveredProject('')}>
							<HighlightOffIcon />
						</Button>
					</MobileView>
				</Box>
				<Box className={descriptionContainer}>
					<Typography
						className={description}
						variant='body2'
						color='textSecondary'
					>
						{proj.description}
					</Typography>
				</Box>
			</Box>
			<Box className={projectImage}>
				{proj.image && (
					<Image
						src={proj.image}
						alt={`${proj.image}-thumbnail`}
						style={{minHeight: '100%', maxHeight: '150%'}}
					/>
				)}
			</Box>
			<Box
				className={clsx(skillsContainer, {
					[skillsContainerDarkMode]: isHoveredProject,
				})}
			>
				{proj.skills
					.sort((x1: string, x2: string) => (x1 < x2 ? -1 : 1))
					.map((skill: string, i: number) => (
						<Box
							key={`skill-${proj.order}-${i}`}
							className={clsx(indivSkill, {
								[indivSkillDarkMode]:
									isHoveredProject,
							})}
						>
							<Typography
								variant='body2'
								color={
									isHoveredProject
										? 'textSecondary'
										: 'textPrimary'
								}
							>
								{skill}
							</Typography>
						</Box>
					))}
			</Box>
		</Box>
	);
};
