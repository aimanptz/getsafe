import { PathNameList } from 'router';
import { RoleTypes } from '../common';

export interface IRoute {
	name: PathNameList;
	requiredRoles?: RoleTypes[];
	nested?: IRoute[];
}

export interface IPathRoute extends IRoute {
	path: string;
}
