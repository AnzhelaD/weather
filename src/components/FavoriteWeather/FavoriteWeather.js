import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../contexts/AppContext";
import Title from "../Title/Title";
import WeatherCard from "../WeatherCard/WeatherCard";

import styles from './FavoriteWeather.module.scss';

const FavoriteWeather = () => {
    const { savedData, setSavedData } = useContext(AppContext);
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const options = { weekday: 'long' };
        setCurrentDay(currentDate.toLocaleDateString('en-US', options));
    }, []);

    const handleRemoveFromFavorites = (id) => {
        setSavedData((prevData) => prevData.filter((data) => data.id !== id));
    };
    const handleAddToFavorites = () =>{}

    return (
        <div className={styles.container}>
            <Title>My Favorite Weather</Title>
            <div className={styles.list}>
                {savedData && savedData.map((data, index) => (
                    <WeatherCard
                        key={data.id}
                        isFavorite = {true}
                        id ={data.id}
                        city={data.name}
                        currentDay={currentDay}
                        temperature={data.main?.temp}
                        humidity = {data.main?.humidity}
                        pressure = {data.main?.pressure}
                        wind = {data.wind?.speed}
                        weatherDescription={data.weather[0]?.description}
                        weatherIcon={`http://openweathermap.org/img/wn/${data.weather[0]?.icon}.png`}
                        onAddToFavorites={() => handleAddToFavorites()}
                        onRemoveFromFavorites={() => handleRemoveFromFavorites(data.id)}
                    ></WeatherCard>
                ))}
            </div>
        </div>
    )
};

export default FavoriteWeather;