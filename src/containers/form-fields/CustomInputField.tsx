import { ErrorMessage, FastField, Field, FieldProps } from 'formik';
import React, { useMemo } from 'react';
import { CustomInput, CustomInputProps } from 'components';

interface CustomInputFieldProps extends CustomInputProps {
	name: string;
	useFast?: boolean;
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({
		useFast,
		name,
		...props
	}) => {
		const FormikFieldWrapper = useMemo(
			() => useFast ? FastField : Field,
			[useFast]
		);

		return (
			<FormikFieldWrapper name={name}>
				{({ field, meta }: FieldProps) => (
					<CustomInput
						error={!!meta.error && meta.touched}
						helperText={<ErrorMessage name={name} />}
						{...props}
						{...field}
					/>
				)}
			</FormikFieldWrapper>
		);
	}
;
