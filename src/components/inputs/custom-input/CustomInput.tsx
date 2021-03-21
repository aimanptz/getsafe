import React from 'react';
import { TextField, StandardTextFieldProps } from '@material-ui/core';

export interface CustomInputProps extends StandardTextFieldProps {
}

export const CustomInput: React.FC<CustomInputProps> = props => {
	return (
		<TextField {...props} />
	);
};
