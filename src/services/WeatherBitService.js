import { getCurrentPosition } from './GeoLocationService';

const getData = async (endpoint, query) => {


    const host = 'api.weatherbit.io/v2.0/';
    const url = `https://${host}${endpoint}${query}&key=458eaaf6f33e47469236615f28469753`;

    const response = await fetch(url);

    if (response.status === 204 || response.status == 400) {
        return null;
    }

    const json = await response.json();

    return json.data;
}

const getLocationQuery = async () => {

    const position = await getCurrentPosition();
    return { 'lat': position.coords.latitude, 'lon': position.coords.longitude };
}

const getQueryFromObj = (queryObj) => {
    return "?" + Object.keys(queryObj).map(key => key + '=' + queryObj[key]).join('&');
}

const isQueryObjEmpty = (query) => {
    return Object.entries(query).length === 0 ? true : false;
}

export const fetchWeather = async () => {

    const queryObj = await getLocationQuery();
    const query = getQueryFromObj(queryObj)

    return await getData('current', query);
}

export const fetchForecast = async () => {
    
    const queryObj = await getLocationQuery();
    const query = getQueryFromObj(Object.assign(queryObj, {
        'days': 5
    }));

    return await getData('forecast/daily', query);
}

export const fetchWeatherByQuery = async (query) => {

    const newQuery = isQueryObjEmpty(query) ? await getLocationQuery() : getQueryFromObj(query);

    return await getData('current', newQuery);
}

export const fetchForecastByQuery = async (query) => {

    const newQuery = isQueryObjEmpty(query) ? await getLocationQuery() : getQueryFromObj(query);

    return await getData('forecast/daily', newQuery);
}
