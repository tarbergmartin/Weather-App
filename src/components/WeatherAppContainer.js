import React, { useState, useEffect, useRef } from 'react';
import { fetchWeather, fetchForecast, fetchWeatherByQuery, fetchForecastByQuery } from '../services/WeatherBitService';
import { buildQuery, getStoredFavorites, storeFavorites } from '../helpers/AppHelpers';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import CurrentWeatherWrapper from './CurrentWeatherWrapper';
import ForecastList from './ForecastList';
import FavoritesList from './FavoritesList';

export default function WeatherAppContainer() {

    const [favorites, setFavorites] = useState(getStoredFavorites());
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();
    const [currentLocation, setCurrentLocation] = useState();

    const inputRef = useRef('');

    useEffect(() => {
        getWeatherData();
    }, []);

    useEffect(() => {
        storeFavorites(favorites);
    }, [favorites]);

    const getWeatherData = async () => {
        const [weatherData, forecastData] = await Promise.all([
            fetchWeather(),
            fetchForecast()
        ]);

        setData(weatherData, forecastData);
    }

    const setData = (weatherData, forecastData) => {

        setWeather(weatherData !== null ? weatherData[0] : null);
        setForecast(forecastData !== null ? forecastData : null);
        setCurrentLocation(weatherData !== null ? `${weatherData[0].city_name},${weatherData[0].country_code}` : null);
    }

    const getWeatherByQuery = async (e) => {

        e.preventDefault();
    
        const clickedFav = e.target.id;
        const queryInput = clickedFav ? clickedFav : inputRef.current.value;
        const query = buildQuery(queryInput);

        const [weatherData, forecastData] = await Promise.all([
            fetchWeatherByQuery(query),
            fetchForecastByQuery(query)
        ]);

        setData(weatherData, forecastData);
    }

    const addFavorite = () => {
        setFavorites([...favorites, currentLocation]);
    }

    const removeFavorite = (e) => {
        
        const favoriteListItem = e.target.value;
        const itemToRemove = favoriteListItem ? favoriteListItem : currentLocation;
       
        setFavorites([...favorites.filter(f => f !== itemToRemove)]);
    }

    return (
        <div className="weather-app">
            <FavoritesList 
                favorites={favorites}
                getWeatherByQuery={getWeatherByQuery} />
            <CurrentWeatherWrapper
                current={weather}
                location={currentLocation}
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite} />
            <Searchbar inputRef={inputRef} getWeatherByQuery={getWeatherByQuery} />
            <ForecastList forecast={forecast} />
        </div>
    )
}