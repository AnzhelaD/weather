import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WeatherCard from './WeatherCard';

describe('WeatherCard Component', () => {
    const weatherData = {
        id: 1,
        isFavorite: false,
        city: 'London',
        currentDay: 'Monday',
        temperature: 20,
        humidity: 60,
        pressure: 1010,
        wind: 5,
        weatherDescription: 'Sunny',
        weatherIcon: '/assets/sunny.jpg',
    };

    it('renders the component with the provided data', () => {
        render(
            <WeatherCard
                id={weatherData.id}
                isFavorite={weatherData.isFavorite}
                city={weatherData.city}
                currentDay={weatherData.currentDay}
                temperature={weatherData.temperature}
                humidity={weatherData.humidity}
                pressure={weatherData.pressure}
                wind={weatherData.wind}
                weatherDescription={weatherData.weatherDescription}
                weatherIcon={weatherData.weatherIcon}
                onAddToFavorites={() => {}}
                onRemoveFromFavorites={() => {}}
            />
        );

        const cardHeader = screen.getByText(`Weather in ${weatherData.city}`);
        const temperatureText = screen.getByText(`Temperature: ${weatherData.temperature}(°K)`);
        const humidityText = screen.getByText(`Humidity: ${weatherData.humidity} %`);
        const pressureText = screen.getByText(`Pressure: ${weatherData.pressure} atm`);
        const windText = screen.getByText(`Wind: ${weatherData.wind} (m/s)`);
        const weatherDescriptionText = screen.getByText(`Weather: ${weatherData.weatherDescription}`);
        const addButton = screen.getByText('Add To Favorite');
        const removeButton = screen.getByText('Remove From Favorite');

        expect(cardHeader).toBeInTheDocument();
        expect(temperatureText).toBeInTheDocument();
        expect(humidityText).toBeInTheDocument();
        expect(pressureText).toBeInTheDocument();
        expect(windText).toBeInTheDocument();
        expect(weatherDescriptionText).toBeInTheDocument();
        expect(addButton).toBeInTheDocument();
        expect(removeButton).toBeInTheDocument();
    });

    it('calls the onAddToFavorites function when the "Add To Favorite" button is clicked', () => {
        const onAddToFavorites = jest.fn();

        render(
            <WeatherCard
                id={weatherData.id}
                isFavorite={weatherData.isFavorite}
                city={weatherData.city}
                currentDay={weatherData.currentDay}
                temperature={weatherData.temperature}
                humidity={weatherData.humidity}
                pressure={weatherData.pressure}
                wind={weatherData.wind}
                weatherDescription={weatherData.weatherDescription}
                weatherIcon={weatherData.weatherIcon}
                onAddToFavorites={onAddToFavorites}
                onRemoveFromFavorites={() => {}}
            />
        );

        const addButton = screen.getByText('Add To Favorite');
        fireEvent.click(addButton);

        expect(onAddToFavorites).toHaveBeenCalled();
    });
});