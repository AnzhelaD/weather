import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
    return (
        <nav>
            <ul className={styles.items}>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="weather">MyWeather</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;