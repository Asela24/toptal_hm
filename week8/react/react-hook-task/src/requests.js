import { extractDataFromResponse } from './utils'
 
const API_KEY = '60DkEgIo47PzMx5HhSxgpTz2GjNy0PTJ';
const API_KEY2 = '7AUDDMiJoAbBFBpeprrtFltgWow1hGvt';
const API_KEY3 = 'CcVmxB5hJtU7Hq2GjFUhJTeHyq5H9FOU';
const API_KEY4 = 'kGzvdWAM5o0q5HDYGUyiINFiFGSWidmP';
const API_KEY5 = '	xM2iz5uATEGYvq3KPzouufXDpfb3AOm4';
const API_KEY6= 'Msq0LLJ2P8vILAr8AWgu3sUibpnzdnMo';
const API_URL = 'http://dataservice.accuweather.com/';
const API_SEARCH = 'locations/v1/cities/geoposition/search';
const API_SEARCH_BY_CITY = 'locations/v1/cities/search';
const API_FORECAST = 'forecasts/v1/daily/5day/'

const getBasicInformationByCityName = async (cityName) => {
    try {
    const response = await fetch(`${API_URL}${API_SEARCH_BY_CITY}?apikey=${API_KEY}&q=${cityName}`)

    const resultJson = await response.json()
    const locationKey = await resultJson[0].Key
    const { AdministrativeArea : { EnglishName : city }, LocalizedName: neighborhood }  = await resultJson[0];

    return { locationKey, city, neighborhood }
    } catch (e) {
       console.log('City is not found')
    }
}


const getBasicInformationByCoords = async (latitude, longitude) => {

    try {
        const getApiKey = await fetch(`${API_URL}${API_SEARCH}?apikey=${API_KEY}&q=${latitude},${longitude}`);
    const getResponse = await getApiKey.json(); 
    const locationKey = await getResponse.Key;
    const { AdministrativeArea : { EnglishName : city }, LocalizedName: neighborhood }  = await getResponse;

    return { locationKey, city, neighborhood };
    } catch (e) {
        console.log('Location is not found')
        throw new Error(e)
    }
}


const getForecastData = async (locationKey) => {

    try {
    const fetchForecastData = await fetch(`${API_URL}${API_FORECAST}${locationKey}?apikey=${API_KEY}`); 
    const result = await fetchForecastData.json(); 
  
    const weatherDayData = await result.DailyForecasts; 
    const weatherData  = extractDataFromResponse(weatherDayData)

    return weatherData 
    } catch (e) {
        console.log('Location is not found')
        throw new Error(e);
    } 
}

export { getBasicInformationByCityName, getForecastData, getBasicInformationByCoords };