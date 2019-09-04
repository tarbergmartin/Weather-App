import React from 'react';
import NoResult from '../404/NoResult';
import CurrentWeatherDateDetails from './CurrentWeatherDateDetails';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import CurrentWeatherLogo from './CurrentWeatherLogo';
import FavListDisplayButton from '../Favorites/FavListDisplayButton';

export default function CurrentWeatherWrapper({ current, location, favorites, addFavorite, removeFavorite, toggleFavorites, isFavListVisible }) {

    if (current === null) {
        return (
            <NoResult />
        )
    }

    return (
        <div className="weather-app__current">
            <div className="weather-details-left">
                <FavListDisplayButton
                    favorites={favorites}
                    isFavListVisible={isFavListVisible}
                    toggleFavorites={toggleFavorites}  />
                <CurrentWeatherDateDetails current={current} />
                <CurrentWeatherDetails
                    current={current}
                    location={location}
                    favorites={favorites}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite} />
            </div>
            <div className="weather-details-right">
                <CurrentWeatherLogo current={current} />
            </div>
        </div>
    )
}