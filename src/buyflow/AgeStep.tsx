import React from 'react';
import { BuyflowNames, BuyflowStepProps } from 'models';
import { FormControlLabel } from '@material-ui/core';
import { CustomInputField } from 'containers';

interface AgeStepProps extends BuyflowStepProps {
}

const AgeStep: React.FC<AgeStepProps> = () => {
	return (
		<FormControlLabel
			label="Age:"
			control={<CustomInputField name={BuyflowNames.age} type="number"/>}
			labelPlacement="start"
		/>
	);
};

export default AgeStep;
