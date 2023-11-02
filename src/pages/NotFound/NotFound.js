import React from 'react';
import styles from './NotFound.module.scss';

function NotFound() {
    return (
        <div className={styles.container}>
            <h1>404 - Not Found</h1>
            <div>Sorry, the page you are looking for does not exist.</div>
        </div>
    );
}

export default NotFound;
