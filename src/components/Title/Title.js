import React from 'react';

function Title({ children }) {
    const titleStyle = {
        fontFamily: 'Permanent Marker, cursive',
        fontSize: '40px',
        padding: '0 40px',
        color: '#6022f5',
        textShadow: '1px 1px #303f9f',
    };

    return (
        <h1 style={titleStyle}>{children}s</h1>
    );
}

export default Title;