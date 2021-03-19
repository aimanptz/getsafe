import { IRoute } from 'models';
import { PathNameList } from '../PathNameList';

export const PurchaseRoutes: IRoute = {
	name: PathNameList.purchase,
	nested: [
		{
			name: PathNameList.insurance,
		},
	],
};
