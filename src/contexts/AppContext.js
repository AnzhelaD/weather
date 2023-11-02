import React from 'react';

export const useAppContext = () => {
    const [savedData, setData] = React.useState([]);
    const setSavedData = (data) => {
        setData(data);
    };

    return {
        savedData,
        setSavedData
    };
};

export const AppContext = React.createContext({
    savedData: new Set([]),
    setSavedData: () => {},
});