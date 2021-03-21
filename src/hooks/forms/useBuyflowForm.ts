import { BuyflowNames, BuyflowSteps } from 'models';
import * as Yup from 'yup';
import { useMemo } from 'react';

export const useBuyflowForm = () => {

	const buyflowStepList = useMemo(() => [
		BuyflowSteps.name,
		BuyflowSteps.email,
		BuyflowSteps.age,
	], []);

	const validationSchema: Partial<Record<BuyflowSteps, Yup.AnyObjectSchema>> = {
		[BuyflowSteps.name]: Yup.object().shape({
			[BuyflowNames.firstName]: Yup.string().required(),
			[BuyflowNames.lastName]: Yup.string().required(),
		}),
		[BuyflowSteps.email]: Yup.object().shape({
			[BuyflowNames.email]: Yup.string().email(),
		}),
		[BuyflowSteps.age]: Yup.object().shape({
			[BuyflowNames.age]: Yup.number().integer(),
		}),
	};

	return {
		validationSchema,
		buyflowStepList,
	}
}
