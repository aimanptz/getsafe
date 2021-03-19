import React, { useCallback, useState } from 'react';
import { BuyflowStepProps } from 'models';
import { NumberInput } from 'containers';

interface AgeStepProps extends BuyflowStepProps {
}

const AgeStep: React.FC<AgeStepProps> = ({
	onSubmitStep,
}) => {
	const [age, setAge] = useState<number | string>(0);

	const handleSubmit = useCallback(
		() => onSubmitStep({ age: age ? parseInt(age.toString()) : undefined }),
		[age, onSubmitStep]
	);

	return (
		<>
			<div>
				<label>
					<span>Age:</span>
					<NumberInput onChange={setAge} value={age} />
				</label>
			</div>
			<button onClick={handleSubmit}>Next</button>
		</>
	);
};

export default AgeStep;
