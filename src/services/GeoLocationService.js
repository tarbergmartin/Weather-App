export const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

export const getCityByCoordinates = async (latitude, longitude) => {

    const host = 'geocodeapi.p.rapidapi.com';
    const apiKey = '93e59db7b2msh03769b01f845e19p1506e7jsncb6114361c01';
    const url = `https://${host}/GetNearestCities/?latitude=${latitude}&longitude=${longitude}&range=0`;

    const response = await fetch(url, {
        headers: {
            'x-rapidapi-host': host,
            'x-rapidapi-key': apiKey
        }});

    const data = await response.json();
    return data[0].City;
}
