export const getStoredFavorites = () => {
    const storage = localStorage.getItem('favorites');
    return storage !== null ? JSON.parse(storage) : [];
}

export const storeFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
