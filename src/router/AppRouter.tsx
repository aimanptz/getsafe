import { MainLayout } from 'layout';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { RoutePathList } from 'router/RoutePathList';

const PurchaseRouter = React.lazy(() => import('./routers/PurchaseRouter'));
const RootRouter = React.lazy(() => import('./routers/RootRouter'));

const AppRouter = () => {
	return (
		<Router>
			<MainLayout>
				<Switch>

					<Route path={RoutePathList.purchase} component={PurchaseRouter} />

					<Route path={RoutePathList.root} component={RootRouter}/>

					<Redirect to={RoutePathList.root} />
				</Switch>
			</MainLayout>
		</Router>
	);
};

export default AppRouter;
