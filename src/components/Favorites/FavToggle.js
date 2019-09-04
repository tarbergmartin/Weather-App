import React from 'react'

export default function FavButton({ location, favorites, addFavorite, removeFavorite }) {

    if (!location) {
        return null;
    }

    const isAlreadyFav = favorites !== null ? favorites.includes(location) : false;
   
    return (
        <div className={`favorite-heart ${isAlreadyFav ? "checked" : "unchecked"}`}
             onClick={isAlreadyFav ? removeFavorite : addFavorite}>
            ❤
        </div>
    )

}

