import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchWeather from './SearchWeather';

describe('SearchWeather Component', () => {
    it('allows users to enter a city and search for weather', () => {
        render(<SearchWeather />);
        const inputElement = screen.getByPlaceholderText('Enter city');
        const searchButton = screen.getByText('Search');
        fireEvent.change(inputElement, { target: { value: 'New York' } });
        fireEvent.click(searchButton);
    });

    it('displays an error message for an invalid city', async () => {
        render(<SearchWeather />);
        const inputElement = screen.getByPlaceholderText('Enter city');
        const searchButton = screen.getByText('Search');
        fireEvent.change(inputElement, { target: { value: 'InvalidCity' } });
        fireEvent.click(searchButton);
        const errorElement = await screen.findByText('City not found. Please try again.');
        expect(errorElement).toBeInTheDocument();
    });
});