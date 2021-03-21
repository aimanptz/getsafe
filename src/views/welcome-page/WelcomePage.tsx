import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePathList } from 'router';

const WelcomePage = () => {
	return (
		<>
			<p>Welcome to Getsafe&apos;s Developer Insurance</p>
			<Link to={RoutePathList.insurance}>Get started!</Link>
		</>
	);
};

export default WelcomePage;
