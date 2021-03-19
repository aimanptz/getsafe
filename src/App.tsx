import React from 'react';
import './App.css';

const AppRouter = React.lazy(() => import('./router'));

const App = () => {
	return (
		<React.Suspense fallback={<p>Loading...</p>}>
			<AppRouter />
		</React.Suspense>
	);
};

export default App;
