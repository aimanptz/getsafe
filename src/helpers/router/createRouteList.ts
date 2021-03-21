import { IPathRoute, IPathList, IRoute } from 'models';

export function createRouteList(
	{ nested, requiredRoles, name }: IRoute,
	pathList: IPathList,
	basePath = ''
): IPathRoute[] {

	const path = basePath + pathList[name];

	const nestedPathList: IPathRoute[] = [];

	if (nested?.length) {
		nested.forEach(nestedRoute => {
			nestedPathList.push(...createRouteList(nestedRoute, pathList, path));
		});
	}

	return [
		{
			path,
			name,
			requiredRoles,
		},
		...nestedPathList,
	];
}
