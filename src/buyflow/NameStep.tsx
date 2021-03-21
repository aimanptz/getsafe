import React from 'react';
import { BuyflowNames, BuyflowStepProps } from 'models';
import { Box, FormControlLabel } from '@material-ui/core';
import { CustomInputField } from 'containers';

type NameStepProps = BuyflowStepProps;

const NameStep: React.FC<NameStepProps> = () => {
	return (
		<>
			<Box>
				<FormControlLabel
					label="First name:"
					control={<CustomInputField name={BuyflowNames.firstName} />}
					labelPlacement="start"
				/>
			</Box>
			<Box>
				<FormControlLabel
					label="Last name:"
					control={<CustomInputField name={BuyflowNames.lastName} />}
					labelPlacement="start"
				/>
			</Box>
		</>
	);
}

export default NameStep;
