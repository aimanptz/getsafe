import React, { useCallback } from 'react';
import { CONSTANTS, REGULARS } from 'utils';

interface NumberInputProps {
	onChange: (v: string) => void,
	value: string | number;
}

export const NumberInput: React.FC<NumberInputProps> = ({
	onChange,
	value,
}) => {

	const handleChange = useCallback(
		({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
			onChange(value.replace(REGULARS.nonDigit, ''));
		}, [onChange]);

	const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		CONSTANTS.nonDigitKeys.includes(e.key)&& e.preventDefault();
	}, []);

	return (
		<input
			type='number'
			onChange={handleChange}
			value={value}
			onKeyDown={handleKeyDown}
		/>
	);
};
