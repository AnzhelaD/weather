import React from 'react';
import MainContainer from "../../components/MainContainer/MainContainer";
import SearchWeather from "../../components/SearchWeather/SearchWeather";


function Home() {
    return (
        <MainContainer>
            <SearchWeather></SearchWeather>
        </MainContainer>
    );
}

export default Home;
