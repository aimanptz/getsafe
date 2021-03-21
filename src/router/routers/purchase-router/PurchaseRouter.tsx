import { createRouteListWithComponent } from 'helpers';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PathNameList } from 'router';
import { PathList } from 'router/PathList';
import { RoutePathList } from 'router/RoutePathList';
import { PurchaseRoutes } from 'router/routes';

const PurchaseInsurance = React.lazy(() => import('views/purchase-insurance'));

const viewsMap = {
	[PathNameList.insurance]: PurchaseInsurance,
};

const routerList = createRouteListWithComponent(
	PurchaseRoutes,
	PathList,
	viewsMap,
);

const PurchaseRouter = () => {
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
			<Redirect to={RoutePathList.insurance} />
		</Switch>
	);
};

export default PurchaseRouter;
