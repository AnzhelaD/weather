import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../contexts/AppContext";
import Title from "../Title/Title";
import WeatherCard from "../WeatherCard/WeatherCard";
import styles from './SearchWeather.module.scss';

const SearchWeather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [currentDay, setCurrentDay] = useState('');
    const { setSavedData } = useContext(AppContext);

    useEffect(() => {
        const currentDate = new Date();
        const options = { weekday: 'long' }; // 'long' для полного имени дня
        setCurrentDay(currentDate.toLocaleDateString('en-US', options));
    }, []);

    const searchWeather = () => {
        const apiKey = '';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found. Please try again.');
                }
                return response.json();
            })
            .then(data => {
                setWeatherData(data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setWeatherData(null);
            });
    };

    const handleAddToFavorites = () => {
        setSavedData((prevData) => {
            const citiesSet = new Set(prevData.map(item => item.name));
            if (!citiesSet.has(weatherData.name)) {
                return [...prevData, weatherData];
            }
            return prevData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchWeather();
    };

    return (
        <div className={styles.container}>
            <Title>Search Weather</Title>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className={styles.button} type="submit">Search</button>
            </form>
            {error && <p className={styles.error}>{error}</p>}
            {weatherData && (
                <WeatherCard
                    isFavorite = {false}
                    id ={weatherData.id}
                    city={weatherData.name}
                    currentDay={currentDay}
                    temperature={weatherData.main?.temp}
                    humidity = {weatherData.main?.humidity}
                    pressure = {weatherData.main?.pressure}
                    wind = {weatherData.wind?.speed}
                    weatherDescription={weatherData.weather[0]?.description}
                    weatherIcon={`http://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}.png`}
                    onAddToFavorites={handleAddToFavorites}
                    onRemoveFromFavorites
                />
            )}
        </div>
    );
};

export default SearchWeather;