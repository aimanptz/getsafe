import React, { useCallback, useState } from 'react';
import { BuyflowStepProps } from 'models';

interface EmailStepProps extends BuyflowStepProps {
}

const EmailStep: React.FC<EmailStepProps> = ({ onSubmitStep }) => {
	const [email, setEmail] = useState('');

	const handleSubmit = useCallback(
		() => onSubmitStep({ email }),
		[email, onSubmitStep]
	);

	const handleChange = useCallback(
		({ target }: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value),
		[]
	);

	return (
		<>
			<div>
				<label>
					<span>Email: </span>
					<input type='email' onChange={handleChange} value={email} />
				</label>
			</div>
			<button onClick={handleSubmit}>Next</button>
		</>);
};

export default EmailStep;
