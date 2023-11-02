import React from 'react';
import styles from './WeatherCard.module.scss';

const WeatherCard = ({
                         id,
                         isFavorite,
                         city,
                         currentDay,
                         temperature,
                         humidity,
                         pressure,
                         wind,
                         weatherDescription,
                         weatherIcon,
                         onAddToFavorites,
                         onRemoveFromFavorites,
                     }) => {

    return (
        <div className={styles.card}>
            <h3 className={styles.cardHeader}>Weather in {city}</h3>
            <img src={weatherIcon ? weatherIcon : '/assets/default.jpg'} alt="Weather Icon" />
            <p>Day: {currentDay}</p>
            <p>Temperature: {temperature}(°K)</p>
            <p>Humidity: {humidity} %</p>
            <p>Pressure: {pressure} atm</p>
            <p>Wind: {wind} (m/s)</p>

            <p>Weather: {weatherDescription}</p>
            <div className={styles.buttons}>
                <button className={styles.addButton} disabled={isFavorite} onClick={onAddToFavorites}>Add To Favorite</button>
                <button className={styles.removeButton} disabled={!isFavorite} onClick={() => onRemoveFromFavorites(id)}>Remove From Favorite</button>
            </div>
        </div>
    );
};

export default WeatherCard;