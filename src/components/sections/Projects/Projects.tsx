import { Box, MenuItem, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { TitledSection } from '../../shared/sections/TitledSection/TitledSection';
import { useStyles } from './Projects.style';
import { Project, projects } from './Projects.data';
import clsx from 'clsx';
import { ProjectCard } from './ProjectCard/ProjectCard';
import {BrowserView, MobileView} from 'react-device-detect';
import { MultiSelectChipsOutlined } from '../../shared/inputs/MultiSelectChipsOutlined/MultiSelectChipsOutlined';

export const Projects: FC = () => {
	const {
		projectsContentContainer,
		tagFilterBtnContainer,
		projectListContainer,
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
					<BrowserView viewClassName={tagFilterBtnContainer}>
					{tags.map((tag: string, i: number) => (
						<TagFilterButton
							isActive={activeTags.indexOf(tag) >= 0}
							onClick={() => toggleTag(tag)}
							key={`tag-filter-btn-${i}`}
						>
							{tag}
						</TagFilterButton>
					))}
					</BrowserView>
					<MobileView viewClassName={tagFilterBtnContainer} style={{width: '90%'}} >
						<MultiSelectChipsOutlined
							id='tag-selection'
							value={activeTags}
							margin='none'
							onChange={(e: React.ChangeEvent<{ value: unknown }>) => setActiveTags(e.target.value as string[])}
							label={`Filter by skill...`}
							inputId='tag-selection-input'
							fullWidth
						>
							{tags.map((tag: string, i: number) => (
								<MenuItem key={`tag-${i}`} value={tag}>
									{tag}
								</MenuItem>
							))}
						</MultiSelectChipsOutlined>
						<Typography color='textPrimary' variant='body2' style={{marginTop: '8px'}}>Tap a project for details.</Typography>
					</MobileView>
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
						.map((proj: Project) => 
							<ProjectCard 
								proj={proj} 
								setHoveredProject={setHoveredProject} 
								isHoveredProject={hoveredProject === proj.name}
								key={`proj-${proj.order}`}
							/>
						)}
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
				'active': isActive
			})}
			onClick={onClick}
		>
			{children}
		</Box>
	);
};
