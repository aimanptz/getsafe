import React from 'react';
import { waitFor } from '@testing-library/react';
import { RoutePathList } from 'router/RoutePathList';
import { renderWithRouter } from 'utils';
import PurchaseRouter from './PurchaseRouter';

describe('test PurchaseRouter', () => {

	test('renders Purchase Insurance component', async () => {
		const { queryByText } = renderWithRouter(<PurchaseRouter />, {
			route: RoutePathList.insurance,
		})

		await waitFor(() =>
				expect(queryByText('Buying', { exact: false })).toBeInTheDocument(),
			{
				timeout: 4000,
			}
		)
	})
});
