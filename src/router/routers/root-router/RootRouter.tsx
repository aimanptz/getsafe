import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createRouteListWithComponent } from 'helpers';
import { RootRoutes } from 'router/routes';
import { RoutePathList } from 'router/RoutePathList';
import { PathNameList } from 'router/PathNameList';
import { PathList } from 'router/PathList';

const WelcomePage = React.lazy(() => import('views/welcome-page'));

const viewsMap = {
	[PathNameList.root]: WelcomePage,
};

const routerList = createRouteListWithComponent(
	RootRoutes,
	PathList,
	viewsMap
);

const RootRouter = () => {
	return (
		<Switch>
			{
				routerList.map(({ path, Component }) => (
					<Route
						exact
						key={path}
						path={path}
						render={() => <Component />}
					/>
				))
			}
			<Redirect to={RoutePathList.root} />
		</Switch>
	);
};

export default RootRouter;
