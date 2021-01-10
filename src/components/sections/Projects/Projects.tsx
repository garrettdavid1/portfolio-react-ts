import { Box, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { TitledSection } from '../../shared/sections/TitledSection/TitledSection';
import { useStyles } from './Projects.style';
import { Project, projects } from './Projects.data';
import clsx from 'clsx';

export const Projects: FC = () => {
	const {
		projectsContentContainer,
		tagFilterBtnContainer,
		projectListContainer,
		projectBox,
		projectHeadingContainer,
		projectHeading,
		projectImage,
		projectSkillsContainer,
		skillsContainerDarkMode,
		projectSkillDarkMode,
		projectInfoOverlay,
		projectDescription,
		projectSkill,
	} = useStyles();
	const [activeTags, setActiveTags] = useState<string[]>([]);
	const [hoveredProject, setHoveredProject] = useState<string>('');
	const tags = [
		...new Set(
			projects
				.map((x: Project) => x.skills.join(','))
				.join(',')
				.split(',')
				.map((x: string) => x.toLocaleUpperCase())
				.sort((x1: string, x2: string) => (x1 < x2 ? -1 : 1))
				.filter((x: string) => x !== '')
		),
	];

	const toggleTag = (tag: string) => {
		const activeTagsCopy = [...activeTags];
		if (activeTagsCopy.indexOf(tag) >= 0)
			activeTagsCopy.splice(activeTagsCopy.indexOf(tag), 1);
		else activeTagsCopy.push(tag);

		setActiveTags(activeTagsCopy);
	};

	return (
		<TitledSection title='projects'>
			<Box className={projectsContentContainer}>
				<Box className={tagFilterBtnContainer}>
					{tags.map((tag: string, i: number) => (
						<TagFilterButton
							isActive={activeTags.indexOf(tag) >= 0}
							onClick={() => toggleTag(tag)}
							key={`tag-filter-btn-${i}`}
						>
							{tag}
						</TagFilterButton>
					))}
				</Box>
				<Box className={projectListContainer}>
					{projects
						.filter((proj: Project) => {
							const upperCaseSkills = proj.skills.map(
								(tech: string) => tech.toLocaleUpperCase()
							);
							return (
								activeTags.length === 0 ||
								activeTags.every(
									(tag: string) =>
										upperCaseSkills.indexOf(tag) >= 0
								)
							);
						})
						.sort((p1: Project, p2: Project) =>
							p1.order < p2.order ? -1 : 1
						)
						.map((proj: Project) => (
							<Box
								className={projectBox}
								key={`project-box-${proj.order}`}
								onMouseOver={() => setHoveredProject(proj.name)}
								onMouseOut={() => setHoveredProject('')}
							>
								<Box
									className={projectInfoOverlay}
									style={{
										opacity:
											hoveredProject === proj.name
												? 1
												: 0,
									}}
								>
									<Box className={projectHeadingContainer}>
										<Typography
											className={projectHeading}
											variant='h6'
										>
											{proj.name}
										</Typography>
									</Box>
									<Typography
										className={projectDescription}
										variant='body2'
										color='textSecondary'
									>
										{proj.description}
									</Typography>
								</Box>
								<Box className={projectImage}>
									{proj.image && (
										<img
											src={proj.image}
											alt={`${proj.image}-thumbnail`}
											height='100%'
											width={
												proj.forceFullWidthImage
													? '100%'
													: 'auto'
											}
											style={{ maxWidth: '100%' }}
										/>
									)}
								</Box>
								<Box
									className={clsx(projectSkillsContainer, {
										[skillsContainerDarkMode]:
											hoveredProject === proj.name,
									})}
								>
									{proj.skills
										.sort((x1: string, x2: string) =>
											x1 < x2 ? -1 : 1
										)
										.map((skill: string, i: number) => (
											<Box
												key={`skill-${proj.order}-${i}`}
												className={clsx(projectSkill, {
													[projectSkillDarkMode]:
														hoveredProject ===
														proj.name,
												})}
											>
												<Typography
													variant='body2'
													color={
														hoveredProject ===
														proj.name
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
						))}
				</Box>
			</Box>
		</TitledSection>
	);
};

const TagFilterButton: FC<{
	isActive: boolean;
	onClick: () => void;
}> = ({ isActive, onClick, children }) => {
	const { tagFilterBtn } = useStyles();
	return (
		<Box
			className={clsx(tagFilterBtn, {
				active: isActive,
			})}
			onClick={onClick}
		>
			{children}
		</Box>
	);
};
