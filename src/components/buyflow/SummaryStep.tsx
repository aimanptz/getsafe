import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BuyflowNames, IBuyflowData } from 'models';
import { CONSTANTS } from 'utils';

interface SummaryStepProps {
	collectedData: IBuyflowData;
}

export const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
	const detailsList = useMemo(
		() => [
			{ title: 'First name', key: BuyflowNames.firstName },
			{ title: 'Last name', key: BuyflowNames.lastName },
			{ title: 'Email', key: BuyflowNames.email },
			{ title: 'Age', key: BuyflowNames.age },
		],
		[]
	);

	const getCollectedValue = useCallback(
		(v: IBuyflowData[keyof IBuyflowData]) => {
			if (typeof v === 'string') {
				return v || CONSTANTS.noData;
			}
			return v ?? CONSTANTS.noData;
		},
		[]
	);

	return (
		<>
			<ul>
				{detailsList.map(({ title, key }) => (
					<li key={title}>{`${title}: ${getCollectedValue(
						collectedData[key]
					)}`}</li>
				))}
			</ul>
			<div>
				<Link to="/purchased=dev_ins">Purchase</Link>
			</div>
		</>
	);
};
