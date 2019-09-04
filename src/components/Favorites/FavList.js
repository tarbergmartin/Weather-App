import React from 'react'

export default function FavoritesList({ favorites, getWeatherByQuery, isFavListVisible  }) {

    if (!favorites) {
        return (
            <p>You don't have any favorites</p>
        )
    }

    const className = isFavListVisible ? 'open' : 'closed';

    return (
        <ul className={`weather-app__favorites ${className}`}>
            {
                favorites.map(favorite => {
                    return (
                        <li className="favorites-list__item" key={favorite}>
                            <span id={favorite} onClick={getWeatherByQuery}>
                                {favorite.split(',')[0]}
                            </span>
                        </li>)
                })
            }

        </ul>
    )
}

