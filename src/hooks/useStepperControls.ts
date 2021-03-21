import { useReducer } from 'react';

enum CurrentStepActionTypes {
	increase,
}

interface CurrentStepAction {
	type: CurrentStepActionTypes,
}

function currentStepReducer(
	state: number,
	{ type }: CurrentStepAction = {type: CurrentStepActionTypes.increase}
): number {
	switch (type) {
		default:
			return state + 1;
	}
}

export const useStepperControls = (initialStep = 0) => {
	const [currentStep, increaseCurrentStep] = useReducer(
		currentStepReducer,
		initialStep
	);

	return {
		currentStep,
		increaseCurrentStep,
	}
}
