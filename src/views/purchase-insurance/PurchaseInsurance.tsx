import React from 'react';
import Buyflow from 'buyflow/Buyflow';
import { ProductIds } from 'models';

const PurchaseInsurance = () => {
	return (
		<Buyflow productId={ProductIds.devIns} />
	);
};

export default PurchaseInsurance;
