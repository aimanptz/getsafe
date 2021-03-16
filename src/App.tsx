import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Buyflow, { ProductIds } from './buyflow/Buyflow';

const App = () => {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<Switch>
					<Route path="/buy/insurance_dev">
						<Buyflow productId={ProductIds.devIns} />
					</Route>
					<Route path="/">
						<p>Welcome to Getsafe&apos;s Developer Insurance</p>
						<Link to="/buy/insurance_dev">Get started!</Link>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
