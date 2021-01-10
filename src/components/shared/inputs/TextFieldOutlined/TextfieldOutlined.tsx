import { TextField, TextFieldProps } from '@material-ui/core';
import React, { FC } from 'react';
import { useStyles } from './TextFieldOutlined.style';

export const TextFieldOutlined: FC<TextFieldProps> = ({
	children,
	...rest
}): JSX.Element => {
	const { inputRoot } = useStyles();
	return (
		<TextField
			variant="outlined"
			margin="dense"
			classes={{}}
			InputProps={{
				classes: {
					root: inputRoot,
				},
			}}
			{...rest}
		/>
	);
};
