import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';

describe('test App.tsx', () => {
	test('renders App component with welcome message', async () => {
		const { getByText } = render(<App />);

		await waitFor(() => {
			expect(getByText('Welcome to Getsafe', { exact: false }))
				.toBeInTheDocument();
		});
	});

	test('renders link to purchase flow', async () => {
		const { getByText } = render(<App />);

		await waitFor(() => {
			expect(getByText('Get started!')).toBeInTheDocument();
		});
	});
});
