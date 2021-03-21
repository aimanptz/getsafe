import React from 'react';
import { BuyflowNames } from 'models';
import { FormControlLabel } from '@material-ui/core';
import { CustomInputField } from 'containers';

export const AgeStep: React.FC = () => {
	return (
		<FormControlLabel
			label="Age:"
			control={<CustomInputField name={BuyflowNames.age} type="number"/>}
			labelPlacement="start"
		/>
	);
};
