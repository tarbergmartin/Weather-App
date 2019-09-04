import React from 'react';
import FavButton from './FavButton';
import DateDetails from './DateDetails';
import WeatherDetails from './WeatherDetails';
import WeatherLogo from './WeatherLogo';


export default function CurrentWeatherWrapper({ current, location, favorites, addFavorite, removeFavorite }) {

    if (current === null) {
        return (
            <p>No results were found!</p>
        )
    }

    return (
        <div className="weather-app__current">
            <div className="weather-details-left">
                <DateDetails current={current} />
                <WeatherDetails 
                    current={current}
                    location={location}
                    favorites={favorites}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite} />
            </div>
            <div className="weather-details-right">
                <WeatherLogo current={current} />
            </div>
        </div>
    )
}