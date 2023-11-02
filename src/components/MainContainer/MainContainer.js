import React from 'react';

function MainContainer({ children, ...props }) {
    const containerStyle = {
        display: 'flex',
        width: '100%',
        overflow:'scroll',
        height: '100%',
        backgroundColor: 'lightgray',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div style={containerStyle} {...props}>
            {children}
        </div>
    );
}

export default MainContainer;