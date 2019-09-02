import React from 'react';

const Searchbar = ({ inputRef, handleSearch }) => {
    return (
        <form className="weather-app__search" onSubmit={handleSearch}>
            <input type="text" ref={inputRef} placeholder="Search for a location..." />
            <button type="submit">
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
}

export default Searchbar;