import React from 'react';
import { CONSTANTS } from 'utils';
import { render, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import App from './App';

describe('test App.tsx', () => {
	test('test App component snapshot', async () => {
		const { asFragment, getByText } = render(<App />);

		await waitForElementToBeRemoved(getByText(CONSTANTS.loadingFallback));

		expect(asFragment()).toMatchSnapshot();
	});

	test('renders link to purchase flow', async () => {
		const { queryByText } = render(<App />);

		await waitFor(() => {
			expect(queryByText('Get started!')).toBeInTheDocument();
		});
	});
});
