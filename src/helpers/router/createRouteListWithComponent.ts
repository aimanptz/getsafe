import React from 'react';
import { IPathList, IRoute } from 'models';
import { createRouteList } from './createRouteList';

export function createRouteListWithComponent(
	routeList: IRoute,
	pathList: IPathList,
	viewsMap: Record<string, React.ElementType>,
) {
	return createRouteList(routeList, pathList)
		.map(route => ({
			...route,
			Component: viewsMap[route.name],
		}))
		.filter(routeWithComponent => !!routeWithComponent.Component);
}
