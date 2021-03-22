import { IBuyflowData } from 'models';
import { CONSTANTS } from 'utils';

export function getCollectedValue(v: IBuyflowData[keyof IBuyflowData]) {
	if (typeof v === 'string') {
		return v || CONSTANTS.noData;
	}
	return v ?? CONSTANTS.noData;
}
