import React from 'react';
import { Button, ExtendButtonBase, ButtonTypeMap } from '@material-ui/core';

interface CustomButtonProps extends ExtendButtonBase<ButtonTypeMap> {
}

export const CustomButton: React.FC<CustomButtonProps> = ({children, ...props}) => {
	return (
		<Button {...props}>
			{children}
		</Button>
	);
};
