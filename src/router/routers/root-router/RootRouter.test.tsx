import React from 'react';
import { waitFor } from '@testing-library/react';
import { renderWithRouter } from 'utils';
import RootRouter from './RootRouter';

describe('test RootRouter', () => {

	test('renders WelcomePage component with welcome message', async () => {
		const { queryByText } = renderWithRouter(<RootRouter />);

		await waitFor(() =>
			expect(queryByText('Welcome to Getsafe', { exact: false })).toBeInTheDocument()
		)
	})

	test('redirects to default page within incorrect url provided', async () => {
		const { queryByText } = renderWithRouter(<RootRouter />, {
			route: '/bad/path',
		})

		await waitFor(() =>
				expect(queryByText('Welcome to Getsafe', { exact: false })).toBeInTheDocument(),
			{
				timeout: 4000,
			}
		)
	})
});
