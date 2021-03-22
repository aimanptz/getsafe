import React from 'react';
import { Link } from 'react-router-dom';
import { IBuyflowData } from 'models';
import { PRODUCTS } from 'utils';
import { getCollectedValue } from 'helpers';

interface SummaryStepProps {
	collectedData: IBuyflowData;
}

export const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
	return (
		<>
			<ul>
				{PRODUCTS.insuranceDetailsList.map(({ title, key }) => (
					<li key={title}>
						{`${title}: ${getCollectedValue(collectedData[key])}`}
					</li>
				))}
			</ul>
			<div>
				<Link to="/purchased=dev_ins">Purchase</Link>
			</div>
		</>
	);
};
