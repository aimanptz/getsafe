import { BuyflowNames, BuyflowSteps } from 'models';
import * as Yup from 'yup';

export const useBuyflowForm = () => {

	const buyflowStepList = [
		BuyflowSteps.name,
		BuyflowSteps.email,
		BuyflowSteps.age,
	];

	const buyflowStepFields = {
		[BuyflowSteps.name]: [
			{
				label: 'First name',
				name: BuyflowNames.firstName,
			},
			{
				label: 'Last name',
				name: BuyflowNames.lastName,
			},
		],
		[BuyflowSteps.email]: [
			{
				label: 'Email',
				name: BuyflowNames.email,
			},
		],
		[BuyflowSteps.age]: [
			{
				label: 'Age',
				name: BuyflowNames.age,
				type: 'number',
			},
		],
	};

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
		buyflowStepFields,
	}
}
