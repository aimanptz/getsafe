import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react';

export const renderWithRouter = (component: React.ReactElement, { route = '/' } = {}) => {
	window.history.pushState({}, 'Test page', route)

	return render(component, {
		wrapper: ({ children }) => (
			<React.Suspense fallback={null}>
				<BrowserRouter>
					{children}
				</BrowserRouter>
			</React.Suspense>
		),
	})
}
