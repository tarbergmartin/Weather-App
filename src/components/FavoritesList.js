import React from 'react'

export default function FavoritesList({ favorites, getWeatherByQuery }) {

    if (!favorites) {
        return (
            <p>You don't have any favorites</p>
        )
    }

    return (
        <ul className="favorites-list">
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

