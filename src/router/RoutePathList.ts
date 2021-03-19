import { createRouteList } from 'helpers';
import { Routes } from 'router/routes';
import { IPathList, IPathRoute } from 'models';
import { PathList } from 'router/PathList';

export const RoutePathList = Routes
	.reduce((res: IPathRoute[], route) => [
		...res,
		...createRouteList(route, PathList),
	], [])
	.reduce((res: Partial<IPathList>, { name, path }) => ({
		...res,
		[name]: path,
	}), {}) as IPathList;
