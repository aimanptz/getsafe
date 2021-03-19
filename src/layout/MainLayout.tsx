import React from 'react';
import { Header } from '../components/header';

export const MainLayout: React.FC = ({ children }) => {
	return (
		<div className='App'>
			<Header />
			{children}
		</div>
	);
};
