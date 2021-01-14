import {
	Chip,
	FormControl,
	InputLabel,
	Select,
	SelectProps,
	OutlinedInput
} from '@material-ui/core';
import React, { FC } from 'react';
import { SelectOutlinedProps } from '../SelectOutlined/SelectOutlined';
import { useStyles } from './MultiSelectChipsOutlined.style';

export const MultiSelectChipsOutlined: FC<SelectOutlinedProps & SelectProps> = ({
	label,
	value,
	error,
	inputId,
	children,
	className,
	...rest
}) => {
	const {
		inputRoot,
		selectRoot,
		labelRoot,
		labelFocus,
		chips,
		chip,
	} = useStyles();
	return (
		<FormControl margin='dense' fullWidth={rest.fullWidth} className={className}>
			<InputLabel
				variant='outlined'
				classes={{
					root: labelRoot,
					focused: labelFocus,
					shrink: labelFocus,
				}}
			>
				{label}
			</InputLabel>
			<Select
				multiple
				fullWidth={rest.fullWidth}
				input={
					<OutlinedInput
						id={inputId}
						margin='dense'
						name={inputId}
						value={value}
						error={error}
						fullWidth={rest.fullWidth}
						classes={{
							root: inputRoot,
						}}
					/>
				}
				classes={{
					root: selectRoot
				}}
				renderValue={(selected) => (
					<div className={chips}>
						{Array.isArray(selected) && selected.map((value) => (
							<Chip
								key={value}
								label={value}
								className={chip}
							/>
						))}
					</div>
				)}
				{...rest}
			>
				{children}
			</Select>
		</FormControl>
	);
};