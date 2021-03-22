import { BuyflowNames, ProductIds, ProductNames } from 'models';

export const PRODUCTS = {
	mapIdsToNames: {
		[ProductIds.devIns]: ProductNames.devIns,
	},
	insuranceDetailsList: [
		{ title: 'First name', key: BuyflowNames.firstName },
		{ title: 'Last name', key: BuyflowNames.lastName },
		{ title: 'Email', key: BuyflowNames.email },
		{ title: 'Age', key: BuyflowNames.age },
	],
}
