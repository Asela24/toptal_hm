import { extractDataFromResponse } from './utils'
 
const API_KEY = '60DkEgIo47PzMx5HhSxgpTz2GjNy0PTJ';
const API_KEY2 = '7AUDDMiJoAbBFBpeprrtFltgWow1hGvt';
const API_KEY3 = 'CcVmxB5hJtU7Hq2GjFUhJTeHyq5H9FOU';
const API_URL = 'http://dataservice.accuweather.com/';
const API_SEARCH = 'locations/v1/cities/geoposition/search';
const API_SEARCH_BY_CITY = 'locations/v1/cities/search';
const API_FORECAST = 'forecasts/v1/daily/5day/'

const getBasicInformationByCityName = async (cityName) => {
    
    const response = await fetch(`${API_URL}${API_SEARCH_BY_CITY}?apikey=${API_KEY3}&q=${cityName}`)

    const resultJson = await response.json()
    const locationKey = resultJson[0].Key
    const { AdministrativeArea : { EnglishName : city }, LocalizedName: neighborhood }  = await resultJson[0];

    return { locationKey, city, neighborhood }
}

const getForecastData = async (locationKey) => {
    const fetchForecastData = await fetch(`${API_URL}${API_FORECAST}${locationKey}?apikey=${API_KEY3}`); 
    const result = await fetchForecastData.json(); 
  
    const weatherDayData = result.DailyForecasts; 
    const weatherData  = extractDataFromResponse(weatherDayData)
    console.log(weatherData)
  
    return weatherData 
}



export { getBasicInformationByCityName, getForecastData };