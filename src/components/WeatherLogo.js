import React from 'react';

const WeatherLogo = ({ weatherCode }) => {

    if (weatherCode) {
        return (
            <img src={require(`../images/${weatherCode}.png`)} />
        );
    }

    return null;
}

export default WeatherLogo;