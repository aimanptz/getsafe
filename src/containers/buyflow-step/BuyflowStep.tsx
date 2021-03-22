import React from 'react';
import { Box, FormControlLabel } from '@material-ui/core';
import { CustomInputField } from '../form-fields';

interface IBuyFlowField {
	label: string;
	name: string;
	type?: string;
}

interface BuyflowStepProps {
	fields: IBuyFlowField[];
}

export const BuyflowStep = ({
	fields,
}: BuyflowStepProps) => {
	return (
		<>
			{fields.map(field => (
				<Box key={field.name}>
					<FormControlLabel
						label={`${field.label}:`}
						control={<CustomInputField name={field.name} type={field.type} />}
						labelPlacement="start"
					/>
				</Box>
			))}
		</>
	);
};
