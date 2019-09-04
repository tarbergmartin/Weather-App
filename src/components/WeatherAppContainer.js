import React, { useState, useEffect, useRef } from 'react';
import { fetchWeather, fetchForecast, fetchWeatherByQuery, fetchForecastByQuery } from '../services/WeatherBitService';
import { buildQuery } from '../helpers/WeatherAppHelper';
import { getStoredFavorites, storeFavorites } from '../helpers/LocalStorageHelper';
import FavList from './Favorites/FavList';
import CurrentWeatherWrapper from './CurrentWeather/CurrentWeatherWrapper';
import Searchbar from './Search/Searchbar';
import ForecastList from './Forecast/ForecastList';

export default function WeatherAppContainer() {

    const [favorites, setFavorites] = useState(getStoredFavorites());
    const [weather, setWeather] = useState();
    const [forecast, setForecast] = useState();
    const [currentLocation, setCurrentLocation] = useState();
    const [isFavListVisible, setFavListVisibility] = useState(false);

    const inputRef = useRef('');

    useEffect(() => {
        getWeatherData();
    }, []);

    useEffect(() => {

        storeFavorites(favorites);

        if (favorites.length === 0) {
            setFavListVisibility(false);
        }

    }, [favorites]);

    const getWeatherData = async () => {
        const [weatherData, forecastData] = await Promise.all([
            fetchWeather(),
            fetchForecast(6)
        ]);

        setData(weatherData, forecastData);
    }

    const setData = (weatherData, forecastData) => {

        setWeather(weatherData !== null ? weatherData[0] : null);
        setForecast(forecastData !== null ? forecastData.splice(0, 5) : null);
        setCurrentLocation(weatherData !== null ? `${weatherData[0].city_name},${weatherData[0].country_code}` : null);
    }

    const getWeatherByQuery = async (e) => {

        e.preventDefault();

        const clickedFav = e.target.id;
        const queryInput = clickedFav ? clickedFav : inputRef.current.value;

        const queryObj = buildQuery(queryInput);

        const [weatherData, forecastData] = await Promise.all([
            fetchWeatherByQuery(queryObj),
            fetchForecastByQuery(queryObj, 6)
        ]);

        inputRef.current.value = '';
        setData(weatherData, forecastData);
    }

    const addFavorite = () => {
        setFavorites([...favorites, currentLocation]);
    }

    const removeFavorite = (e) => {
        const favoriteListItem = e.target.value;
        const itemToRemove = favoriteListItem ? favoriteListItem : currentLocation;

        setFavorites([...favorites.filter(fav => fav !== itemToRemove)]);
    }

    const toggleFavorites = () => {
        setFavListVisibility(!isFavListVisible);
    }

    return (
        <div className="weather-app">
            <FavList
                favorites={favorites}
                getWeatherByQuery={getWeatherByQuery}
                isFavListVisible={isFavListVisible} />
            <CurrentWeatherWrapper
                current={weather}
                location={currentLocation}
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                toggleFavorites={toggleFavorites}
                isFavListVisible={isFavListVisible} />
            <Searchbar inputRef={inputRef} getWeatherByQuery={getWeatherByQuery} />
            <ForecastList forecast={forecast} />
        </div>
    )
}