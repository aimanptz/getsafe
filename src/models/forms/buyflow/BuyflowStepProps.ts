import { IBuyflowData } from './IBuyflowData';

export declare function BuyflowStepCb(data: Partial<IBuyflowData>): void;

export interface BuyflowStepProps {
	onSubmitStep: typeof BuyflowStepCb;
}
