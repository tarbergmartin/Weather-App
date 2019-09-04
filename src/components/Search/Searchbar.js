import React from 'react';

export default function Searchbar ({ inputRef, getWeatherByQuery }) {
    return (
        <form className="weather-app__search" onSubmit={getWeatherByQuery}>
            <input className="search-input" type="text" ref={inputRef} placeholder="Search for a location..." />
            <input className="search-button" type="submit" value="Search"/>
        </form>
    );
}