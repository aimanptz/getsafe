import React from 'react';
import { render, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import App from './App';

describe('test App.tsx', () => {
	test('test App component snapshot', async () => {
		const { asFragment, getByText } = render(<App />);

		await waitForElementToBeRemoved(getByText('Loading...'));

		expect(asFragment()).toMatchSnapshot();
	});

	test('renders link to purchase flow', async () => {
		const { getByText } = render(<App />);

		await waitFor(() => {
			expect(getByText('Get started!')).toBeInTheDocument();
		});
	});
});
