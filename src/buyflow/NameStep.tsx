import React, { FormEvent, useCallback, useReducer } from 'react';
import { BuyflowNames, BuyflowStepProps, INameStepData } from 'models';

interface NameStepProps extends BuyflowStepProps {
}

function nameStepReducer(state: INameStepData, nextState: Partial<INameStepData>) {
	return {
		...state,
		...nextState,
	}
}

const NameStep: React.FC<NameStepProps> = ({
	onSubmitStep,
}) => {
	const [userData, setUserData] = useReducer(nameStepReducer, {
		[BuyflowNames.firstName]: '',
		[BuyflowNames.lastName]: '',
	});

	const handleSubmit = useCallback((e: FormEvent) => {
		e.preventDefault();
		onSubmitStep(userData)
	}, [userData, onSubmitStep]);

	const handleChange = useCallback(
		({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
			setUserData({ [name]: value });
		}, []);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					<span>First name: </span>
					<input
						type='text'
						name={BuyflowNames.firstName}
						value={userData.firstName}
						onChange={handleChange}
						required
					/>
				</label>
			</div>
			<div>
				<label>
					<span>Last name: </span>
					<input
						type='text'
						name={BuyflowNames.lastName}
						value={userData.lastName}
						onChange={handleChange}
						required
					/>
				</label>
			</div>
			<button type='submit'>Next</button>
		</form>
	);
};

export default NameStep;
