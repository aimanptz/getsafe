import React from 'react';
import { BuyflowNames, BuyflowStepProps } from 'models';
import { FormControlLabel } from '@material-ui/core';
import { CustomInputField } from '../containers';

type EmailStepProps = BuyflowStepProps;

const EmailStep: React.FC<EmailStepProps> = () => {
	return (
		<FormControlLabel
			label="Email:"
			control={<CustomInputField name={BuyflowNames.email} />}
			labelPlacement="start"
		/>
	);
};

export default EmailStep;
