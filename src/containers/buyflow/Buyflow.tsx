import React, { useCallback, useMemo } from 'react';
import { IBuyflowData, ProductIds } from 'models';
import { useBuyFlowData, useBuyflowForm, useStepperControls } from 'hooks';
import { Form, Formik } from 'formik';
import { Box } from '@material-ui/core';
import { PRODUCTS } from 'utils';
import { CustomButton, SummaryStep } from 'components';
import { BuyflowStep } from '../buyflow-step';

interface BuyflowProps {
	productId: ProductIds;
}

export const Buyflow: React.FC<BuyflowProps> = ({ productId }) => {
	const { buyflowStepList, validationSchema, buyflowStepFields } = useBuyflowForm();
	const { collectedData, updateCollectedData } = useBuyFlowData();
	const { currentStep, increaseCurrentStep } = useStepperControls()

	const productName = useMemo(
		() => PRODUCTS.mapIdsToNames[productId],
		[productId]
	);

	const stepKey = useMemo(
		() => buyflowStepList[currentStep],
		[currentStep, buyflowStepList]
	);

	const isLastStep = useMemo(
		() => buyflowStepList.length === currentStep,
		[buyflowStepList, currentStep]
	);

	const handleSubmitStep = useCallback((buyFlowData: Partial<IBuyflowData>, actions) => {
		updateCollectedData(buyFlowData);
		increaseCurrentStep();
		actions.setTouched({});
		actions.setSubmitting(false);
	}, [increaseCurrentStep, updateCollectedData]);

	const currentValidationSchema = useMemo(
		() => validationSchema[stepKey],
		[validationSchema, stepKey]
	);

	if (isLastStep) {
		return <SummaryStep collectedData={collectedData} />
	}

	return (
		<Formik
			initialValues={collectedData}
			validationSchema={currentValidationSchema}
			onSubmit={handleSubmitStep}
		>
			{
				({ isSubmitting }) => (
					<Form id={stepKey}>
						<h4>Buying {productName}</h4>
						<BuyflowStep fields={buyflowStepFields[stepKey]} />
						<Box>
							<CustomButton
								type="submit"
								disabled={isSubmitting}
								form={stepKey}
							>
								Next
							</CustomButton>
						</Box>
					</Form>
				)
			}
		</Formik>
	);
};
