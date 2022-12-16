export const API_KEY = '60DkEgIo47PzMx5HhSxgpTz2GjNy0PTJ';
export const API_URL = 'http://dataservice.accuweather.com/';
const API_SEARCH = 'locations/v1/cities/geoposition/search';
const API_FORECAST = 'forecasts/v1/daily/5day/'

window.onload = async function() {
 const locationKey = await getLocationKey();
    await getForeCast(locationKey);
}


const getLocationKey = async () => {
    const information = await  getLocation();
    const latitude = information.coords.latitude;
    const longitude = information.coords.longitude;
    const getApiKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`);
    const getResponse = await getApiKey.json();

    const locationKey = await getResponse.Key;

    return locationKey
}

//date,pics,desc, time max and min

const getForeCast = async (locationKey) => {

    const fetchForecastData = await fetch(`${API_URL}${API_FORECAST}${locationKey}?apikey=${API_KEY}`);
    const result = await fetchForecastData.json();
    const weatherArray = result.DailyForecasts;
  
}

const getLocationFromUser = () => new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((success) => resolve(success), error => reject(error))
    })

const getLocation = async () => await getLocationFromUser();
