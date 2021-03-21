import { useReducer } from 'react';
import { BuyflowNames, IBuyflowData } from 'models';

function collectedDataReducer(
	collectedData: IBuyflowData,
	newData: Partial<IBuyflowData>
) {
	return {
		...collectedData,
		...newData,
	};
}

export const useBuyFlowData = () => {
	const [collectedData, updateCollectedData] = useReducer(
		collectedDataReducer,
		{
			[BuyflowNames.email]: '',
			[BuyflowNames.age]: 0,
			[BuyflowNames.firstName]: '',
			[BuyflowNames.lastName]: '',
		}
	);

	return {
		collectedData,
		updateCollectedData,
	}
};
