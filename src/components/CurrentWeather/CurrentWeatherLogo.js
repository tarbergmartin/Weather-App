import React from 'react';
import { getWeatherCode } from '../../helpers/WeatherAppHelper';

export default function WeatherLogo ({ current })  {

    if (!current) {
        return null;
    }

    const { weather, pod } = current;
    const { code, description } = weather;
    const weatherCode = getWeatherCode(code, pod);

    return (
        <div>
            <img src={require(`../../images/${weatherCode}.png`)} />
            <h4>{description}</h4>
        </div>
    );
}

