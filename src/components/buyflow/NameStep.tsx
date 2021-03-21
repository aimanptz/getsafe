import React from 'react';
import { BuyflowNames } from 'models';
import { Box, FormControlLabel } from '@material-ui/core';
import { CustomInputField } from 'containers';

export const NameStep: React.FC = () => {
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
