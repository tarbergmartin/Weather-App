const get = async (endpoint, params) => {

    const host = 'community-open-weather-map.p.rapidapi.com/';
    const query = paramsToQuery(params);
    const url = `https://${host}${endpoint}${query}`;

    const response = await fetch(url, {
        headers: {
            'x-rapidapi-host': host,
            'x-rapidapi-key': '93e59db7b2msh03769b01f845e19p1506e7jsncb6114361c01'
        }
    });

    return await response.json();
}

const paramsToQuery = (params) => {

    if (params === undefined) {
        return null;
    }

    return "?" + Object.keys(params).map(key => key + '=' + params[key]).join('&');
}

export const fetchWeather = async (params) => {
    return await get('weather', params);
}

export const fetchForecast = async (params) => {
    return await get('forecast', params);
}
