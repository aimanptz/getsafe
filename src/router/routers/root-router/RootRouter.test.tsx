import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import RootRouter from './RootRouter';

describe('test RootRouter', () => {

	test('renders WelcomePage component with welcome message', async () => {
		const history = createMemoryHistory()

		const { getByText } = render(
			<React.Suspense fallback={null}>
				<Router history={history}>
					<RootRouter />
				</Router>
			</React.Suspense>
		)
		await waitFor(() => {
			expect(getByText('Welcome to Getsafe', { exact: false })).toBeInTheDocument()
		})
	})

	test('redirects to default page within incorrect url provided', async () => {
		const history = createMemoryHistory()
		history.push('/bad/path')

		const { getByText } = render(
			<React.Suspense fallback={null}>
				<Router history={history}>
					<RootRouter />
				</Router>
			</React.Suspense>
		)
		await waitFor(() => {
			expect(getByText('Welcome to Getsafe', { exact: false })).toBeInTheDocument()
		})
	})
});
