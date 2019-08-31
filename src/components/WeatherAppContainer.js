import React, { useState, useEffect } from 'react';
import { CurrentWeather } from './CurrentWeather';
import { fetchWeather, fetchForecast } from '../services/OpenWeatherMapService';
import { getCurrentPosition } from '../services/GeoLocationService';


export default function WeatherAppContainer() {

    const [favorite, setFavorite] = useState();
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [position, setPosition] = useState();
    const [test, setTest] = useState(true);

    useEffect(() => {
        // Set current position only on componentDidMount.
        console.log('componentDidMount');
        getCurrentPosition()
            .then(response => setPosition(response.coords))
    }, [])


    useEffect(() => {
        // Track changes in position state and fetch data when it exist.
        if (position) {
            getWeather();
            getForecast();
        }

        console.log('positionDidUpdate')

    }, [position])

    console.log("Render")

    const getWeather = async () => {

        const data = await fetchWeather({
            'units': 'metric',
            'q': 'stockholm,se'
        });


        setWeather(data);

    };

    const getForecast = async () => {
        const data = await fetchForecast({
            'units': 'metric',
            'lat': position.latitude,
            'lon': position.longitude
        })
        // console.log(data);

        setForecast(data);
    }

    return (
        <>
            <button onClick={() => setTest(!test)}></button>
            <CurrentWeather />
        </>

    )
}