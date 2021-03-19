import React, { useCallback, useState } from 'react';
import { BuyflowNames, BuyflowStepProps } from 'models';
import { NumberInput } from 'containers';

interface AgeStepProps extends BuyflowStepProps {
}

const AgeStep: React.FC<AgeStepProps> = ({
	onSubmitStep,
}) => {
	const [age, setAge] = useState<number | string>(0);

	const handleSubmit = useCallback(
		() => onSubmitStep({ age: age ? parseInt(age.toString(), 10) : undefined }),
		[age, onSubmitStep],
	);

	return (
		<>
			<div>
				<label htmlFor={BuyflowNames.age}>
					<span>Age:</span>
					<NumberInput
						onChange={setAge}
						value={age}
						name={BuyflowNames.age}
					/>
				</label>
			</div>
			<button onClick={handleSubmit} type="button">Next</button>
		</>
	);
};

export default AgeStep;
