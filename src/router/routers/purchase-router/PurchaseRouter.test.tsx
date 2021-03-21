import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import PurchaseRouter from './PurchaseRouter';
import { RoutePathList } from 'router/RoutePathList';

describe('test PurchaseRouter', () => {

	test('renders Purchase Insurance component', async () => {
		const history = createMemoryHistory()
		history.push(RoutePathList.insurance)

		const { getByText } = render(
			<React.Suspense fallback={null}>
				<Router history={history}>
					<PurchaseRouter />
				</Router>
			</React.Suspense>
		)
		await waitFor(() => {
			expect(getByText('Buying', { exact: false })).toBeInTheDocument()
		})
	})
});
