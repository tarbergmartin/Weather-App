import React from 'react'
import FavButton from './FavButton';

export default function WeatherDetails({current, location, favorites, addFavorite, removeFavorite}) {

    if (!current) {
        return null;
    }

    const { temp, city_name, country_code } = current;
    const roundedTemp = Math.round(temp);

    return (
        <>
            <h3>{roundedTemp}°C</h3>
            <h4>
                {city_name}, 
                {country_code}
                <FavButton
                location={location}
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite} />
            </h4>
        </>
    );
}