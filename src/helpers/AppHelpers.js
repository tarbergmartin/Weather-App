export const buildQuery = (input) => {

    const params = input.split(',')
        .splice(0, 2)
        .filter(p => !isStringNullOrEmpty(p))

    const queryObj = Object.assign({},
        params[0] ? { city: params[0] } : null,
        params[1] ? { country: params[1] } : null,
                    { 'days': 5 });

    return queryObj;
}

export const getDateStringByTimeZone = (timezone) => {
    return new Date().toLocaleDateString('en-GB', {
        timeZone: timezone,
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}

export const getTimeStringByTimeZone = (timezone) => {
    return new Date().toLocaleTimeString('en-GB', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit'
    });
}

export const getStoredFavorites = () => {
    const storage = localStorage.getItem('favorites');
    return storage !== null ? JSON.parse(storage) : [];
}

export const storeFavorites= (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export const getWeatherCode = (weatherCode, partOfDay) => {

    weatherCode = Number(weatherCode);

    if (!weatherCode || !partOfDay) {
        return null;
    }

    if (weatherCode >= 200 && weatherCode <= 202) {
        return partOfDay === 'd' ? '200d' : '200n';
    }

    else if (weatherCode >= 230 && weatherCode <= 233) {
        return '230';
    }

    else if (weatherCode >= 300 && weatherCode <= 302) {
        return '300';
    }

    else if (weatherCode === 500 || weatherCode === 501 || weatherCode === 511 || weatherCode === 900) {
        return '500';
    }

    else if (weatherCode === 502) {
        return '502';
    }

    else if (weatherCode >= 520 && weatherCode <= 522) {
        return partOfDay === 'd' ? '520d' : '520n';
    }

    else if (weatherCode >= 600 && weatherCode <= 602) {
        return '602';
    }

    else if (weatherCode >= 700 && weatherCode <= 751) {
        return '700';
    }

    else if (weatherCode >= 200 && weatherCode <= 202) {
        return partOfDay === 'd' ? '200d' : '200n';
    }

    else if (weatherCode === 800) {
        return partOfDay === 'd' ? '800d' : '800n';
    }

    else if (weatherCode === 801) {
        return partOfDay === 'd' ? '801d' : '801n';
    }

    else if (weatherCode === 802) {
        return partOfDay === 'd' ? '802d' : '802n';
    }

    else if (weatherCode === 803) {
        return partOfDay === 'd' ? '803d' : '803n';
    }

    else {
        return '804';
    }
}

const isStringNullOrEmpty = (value) => {
    return (!value || value.trim().length === 0) ? true : false;
}