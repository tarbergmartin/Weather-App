import React from 'react';
import WeatherLogo from './WeatherLogo';
import { getWeatherCode } from '../helpers/AppHelpers';

export default function CurrentWeather({ current }) {

    if (!current) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    const { weather, temp, pod, city_name, country_code } = current || {};
    const { code, description } = weather || {};
    const weatherCode = getWeatherCode(code, pod) || null;

    return (
        <div className="weather-app__current">
            <div className="weather-details">
                <h5>Monday 2 September</h5>
                <h1>{city_name}, {country_code}</h1>
                <h2>{description}</h2>
                <p>Temperature: {temp}</p>
            </div>
            <div className="weather-icon">
                <WeatherLogo weatherCode={weatherCode} />
            </div>
        </div>
    )


}