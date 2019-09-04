import React from 'react';
import { getWeatherCode } from '../../helpers/WeatherAppHelper';

export default function ForecastItem({ forecast }) {

    const { max_temp, min_temp, datetime, weather } = forecast;
    const { code } = weather;
    
    const weatherCode = getWeatherCode(code, 'd');
    const roundedMaxTemp = Math.round(max_temp);
    const roundedMinTemp = Math.round(min_temp);

    return (
        <li className="forecast-item">
            <span>{datetime}</span>
            <span>{roundedMaxTemp}° / {roundedMinTemp}°</span>
            <img src={require(`../../images/${weatherCode}.png`)} />
        </li>
    )
}