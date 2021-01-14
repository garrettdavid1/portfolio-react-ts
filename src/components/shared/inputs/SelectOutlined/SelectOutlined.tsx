import { FormControl, InputLabel, OutlinedInput, Select, SelectProps } from '@material-ui/core';
import React, { FC } from 'react';
import { useStyles } from './SelectOutlined.style';

export interface SelectOutlinedProps {
	label: string;
	inputId?: string;
}

export const SelectOutlined: FC<SelectOutlinedProps & SelectProps> = ({label, value, error, fullWidth, inputId, children, className, ...rest}) => {
	const { inputRoot, selectRoot, labelRoot, labelFocus } = useStyles();
	return (
		<FormControl
			margin='dense'
			{...fullWidth}
			className={className}
		>
			<InputLabel 
				variant='outlined'
				classes={{
					root: labelRoot,
					focused: labelFocus,
					shrink: labelFocus
				}}
			>{label}</InputLabel>
			<Select
				margin='dense'
				variant='outlined'
				input={
					<OutlinedInput
						id={inputId}
						margin='dense'
						name={inputId}
						value={value}
						error={error}
						classes={{
							root: inputRoot
						}}
					/>
				}
				classes={{
					root: selectRoot
				}}
				{...rest}
			>
				{children}
			</Select>
		</FormControl>
	)
}