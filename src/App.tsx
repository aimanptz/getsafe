import React from 'react';
import './App.css';
import { CONSTANTS } from 'utils';

const AppRouter = React.lazy(() => import('./router'));

const App = () => {
	return (
		<React.Suspense fallback={<p>{CONSTANTS.loadingFallback}</p>}>
			<AppRouter />
		</React.Suspense>
	);
};

export default App;
