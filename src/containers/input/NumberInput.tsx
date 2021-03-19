import React, { useCallback } from 'react';
import { CONSTANTS, REGULARS } from 'utils';

interface NumberInputProps {
	onChange: (v: string) => void,
	value: string | number;
	name: string;
	id?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
	onChange,
	value,
	name,
	id,
}) => {

	const handleChange = useCallback(
		({ target: { value: targetValue } }: React.ChangeEvent<HTMLInputElement>) => {
			onChange(targetValue.replace(REGULARS.nonDigit, ''));
		}, [onChange]);

	const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		if (CONSTANTS.nonDigitKeys.includes(e.key)) {
			e.preventDefault()
		}
	}, []);

	return (
		<input
			type='number'
			id={id || name}
			name={name}
			onChange={handleChange}
			value={value}
			onKeyDown={handleKeyDown}
		/>
	);
};
