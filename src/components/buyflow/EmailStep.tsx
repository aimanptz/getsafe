import React from 'react';
import { BuyflowNames } from 'models';
import { FormControlLabel } from '@material-ui/core';
import { CustomInputField } from 'containers';

export const EmailStep: React.FC = () => {
	return (
		<FormControlLabel
			label="Email:"
			control={<CustomInputField name={BuyflowNames.email} />}
			labelPlacement="start"
		/>
	);
};
