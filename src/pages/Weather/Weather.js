import React from 'react';
import FavoriteWeather from "../../components/FavoriteWeather/FavoriteWeather";
import MainContainer from "../../components/MainContainer/MainContainer";

function Weather() {
    return (
        <>
           <MainContainer>
               <FavoriteWeather></FavoriteWeather>
           </MainContainer>
        </>
    );
}

export default Weather;