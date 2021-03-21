import React, { useCallback, useMemo, useReducer } from 'react';
import { BuyflowNames, BuyflowSteps, IBuyflowData, ProductIds } from 'models';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';
import NameStep from './NameStep';
import { PRODUCTS } from '../utils';

interface BuyflowProps {
	productId: ProductIds;
}

function collectedDataReducer(
	collectedData: IBuyflowData,
	newData: Partial<IBuyflowData>
) {
	return {
		...collectedData,
		...newData,
	};
}

const Buyflow: React.FC<BuyflowProps> = ({ productId }) => {
	const buyflowStepList = useMemo(
		() => [
			BuyflowSteps.name,
			BuyflowSteps.email,
			BuyflowSteps.age,
			BuyflowSteps.summary,
		], []);

	const [currentStep, setCurrentStep] = useReducer(
		(prevStep: number) => prevStep + 1,
		0
	);

	const [collectedData, updateCollectedData] = useReducer(
		collectedDataReducer,
		{
			[BuyflowNames.email]: '',
			[BuyflowNames.age]: 0,
			[BuyflowNames.firstName]: '',
			[BuyflowNames.lastName]: '',
		}
	);

	const onSubmitStep = useCallback((stepData: Partial<IBuyflowData>) => {
		updateCollectedData(stepData);
		setCurrentStep();
	}, []);

	const buyFlowStep = useMemo(() => {
		const stepKey = buyflowStepList[currentStep];
		const buyFlowStepProps = {
			onSubmitStep,
		};

		switch (stepKey) {
			case BuyflowSteps.age:
				return <AgeStep {...buyFlowStepProps} />;
			case BuyflowSteps.summary:
				return <SummaryStep collectedData={collectedData} />;
			case BuyflowSteps.email:
				return <EmailStep {...buyFlowStepProps} />;
			default:
				return <NameStep {...buyFlowStepProps} />;
		}
	}, [currentStep, collectedData, onSubmitStep, buyflowStepList]);

	const productName = useMemo(
		() => PRODUCTS.mapIdsToNames[productId],
		[productId]
	);

	return (
		<>
			<h4>Buying {productName}</h4>
			{buyFlowStep}
		</>
	);
};

export default Buyflow;
