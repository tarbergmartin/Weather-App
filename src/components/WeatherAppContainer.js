import React, { useState, useEffect, useRef } from 'react';
import { fetchWeather, fetchForecast, fetchWeatherByQuery, fetchForecastByQuery } from '../services/WeatherBitService';
import { buildQuery } from '../helpers/AppHelpers';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const WeatherAppContainer = () => {

    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('fruits')));
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();

    const inputRef = useRef('');

    useEffect(() => {
        getWeatherData();
    }, [])

    const getWeatherData = async () => {
        
        const [weatherData, forecastData] = await Promise.all([
            fetchWeather(),
            fetchForecast()
        ]);

        setWeatherData(weatherData, forecastData);
    }

    const setWeatherData = (weatherData, forecastData) => {
        setWeather(weatherData !== null ? weatherData[0] : null);
        setForecast(forecastData !== null ? forecastData.slice(0, 5) : null);
    }

    const getWeatherByQuery = async (e) => {

        e.preventDefault();
        const query = buildQuery(inputRef.current.value);

        const [weatherData, forecastData] = await Promise.all([
            fetchWeatherByQuery(query),
            fetchForecastByQuery(query)
        ]);

        setWeatherData(weatherData, forecastData);
    }

    const addFavorite = () => {

    }

    return (
        <div className="weather-app">
            <Searchbar inputRef={inputRef} handleSearch={getWeatherByQuery} />
            <Navbar favorites={favorites} />
            <CurrentWeather current={weather} />
            <Forecast forecast={forecast} />
        </div>
    )
}

export default WeatherAppContainer;