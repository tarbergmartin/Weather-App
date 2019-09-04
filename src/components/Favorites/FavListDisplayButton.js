import React from 'react';

export default function FavoriteToggleButton({ favorites, isFavListVisible, toggleFavorites }) {

    if (favorites.length === 0) {
        
        return null;
    }

    const className = isFavListVisible ? 'arrow-up' : 'arrow-down';

    return (
            <i id="toggle-favorites-btn" className={`fa fa-chevron-down ${className}`} onClick={toggleFavorites} />
    )
}