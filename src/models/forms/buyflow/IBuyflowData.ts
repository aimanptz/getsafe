import { BuyflowNames } from './BuyflowNames';
import { INameStepData } from './INameStepData';

export interface IBuyflowData extends INameStepData {
	[BuyflowNames.age]: number | undefined;
	[BuyflowNames.email]: string;
}
