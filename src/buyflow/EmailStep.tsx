import React, { useCallback, useState } from 'react';
import { BuyflowStepProps } from 'models';

type EmailStepProps = BuyflowStepProps;

const EmailStep: React.FC<EmailStepProps> = ({ onSubmitStep }) => {
	const [email, setEmail] = useState('');

	const handleSubmit = useCallback(() => onSubmitStep({ email }), [
		email,
		onSubmitStep,
	]);

	const handleChange = useCallback(
		({ target }: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value),
		[],
	);

	return (
		<>
			<div>
				<label htmlFor="email">
					<span>Email: </span>
					<input
						type="email"
						onChange={handleChange}
						value={email}
						id="email"
					/>
				</label>
			</div>
			<button type="button" onClick={handleSubmit}>
				Next
			</button>
		</>
	);
};

export default EmailStep;
