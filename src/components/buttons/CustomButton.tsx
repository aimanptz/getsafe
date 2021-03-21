import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

interface CustomButtonProps extends ButtonProps {
}

export const CustomButton: React.FC<CustomButtonProps> = ({children, ...props}) => {
	return (
		<Button {...props} type="submit">
			{children}
		</Button>
	);
};
