import { getCurrentPosition } from './GeoLocationService';

const getData = async (endpoint, query) => {

    const host = 'api.weatherbit.io/v2.0/';
    const url = `https://${host}${endpoint}${query}&key=458eaaf6f33e47469236615f28469753`;

    const response = await fetch(url);

    if (response.status === 204 || response.status === 400 || response.status === 403) {
        return null;
    }

    const json = await response.json();

    return json.data;
}

const getLocationQuery = async () => {

    const position = await getCurrentPosition();
    return { 'lat': position.coords.latitude, 'lon': position.coords.longitude };
}

const getQueryFromObj = (queryObj, additionalProps) => {

    if (additionalProps) {
        Object.assign(queryObj, additionalProps);
    }

    return "?" + Object.keys(queryObj).map(key => key + '=' + queryObj[key]).join('&');
}

const checkIfValidQuery = (object) => {
    return object.hasOwnProperty('city') ? true : false;
}

export const fetchWeather = async () => {

    const queryObj = await getLocationQuery();
    const query = getQueryFromObj(queryObj)

    return await getData('current', query);
}

export const fetchForecast = async (days) => {

    const queryObj = await getLocationQuery();
    const query = getQueryFromObj(queryObj, { days: days });

    return await getData('forecast/daily', query);
}

export const fetchWeatherByQuery = async (query) => {

    const isValid = checkIfValidQuery(query);
    let newQuery;

    if (isValid) {
        newQuery = getQueryFromObj(query);
    }

    else {
        newQuery = await getLocationQuery();
        newQuery = getQueryFromObj(newQuery);
    }

    return await getData('current', newQuery);
}

export const fetchForecastByQuery = async (query, days) => {

    const isValid = checkIfValidQuery(query);
    let newQuery;

    if (isValid) {
        newQuery = getQueryFromObj(query, { days: days });
    }

    else {
        newQuery = await getLocationQuery();
        newQuery = getQueryFromObj(newQuery, { days: days });
    }

    return await getData('forecast/daily', newQuery);
}
