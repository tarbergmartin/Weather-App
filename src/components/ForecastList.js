import React from 'react';
import ForecastItem from './ForecastItem';

export default function ForecastList ({ forecast }) {

    if (!forecast) {
        return null;
    }

    return (
        <div className="weather-app__forecast">
            <ul className="forecast-list">
                {
                    forecast.map((weather, index) => {
                        return <ForecastItem key={index} forecast={weather} />
                    })
                }
            </ul>
        </div>
    );
}