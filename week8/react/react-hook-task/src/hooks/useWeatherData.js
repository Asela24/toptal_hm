import { useState } from "react";
const API_KEY = '60DkEgIo47PzMx5HhSxgpTz2GjNy0PTJ';
const API_KEY2 = '7AUDDMiJoAbBFBpeprrtFltgWow1hGvt';
const API_URL = 'http://dataservice.accuweather.com/';
const API_SEARCH = 'locations/v1/cities/geoposition/search';
const API_SEARCH_BY_CITY = 'locations/v1/cities/search';
const API_FORECAST = 'forecasts/v1/daily/5day/'


const useWeatherData = ({latitude, longitude}, requestStatus) => {

    const [weatherData, setWeatherData] = useState('loading');
    const locationKey = 1312890;

    const getWeatherData  = async () => {
        try {
      /*    const getApiKey = await fetch(`${API_URL}${API_SEARCH}?apikey=${API_KEY}&q=${latitude},${longitude}`);
            const getResponse = await getApiKey.json(); 
            const locationKey = await getResponse.Key;
            const { AdministrativeArea : { EnglishName : city }, LocalizedName: neighborhood }  = await getResponse;
            console.log(city, neighborhood  ) */
           
           /*  const fetchForecastData = await fetch(`${API_URL}${API_FORECAST}${locationKey}?apikey=${API_KEY2}`); 
            const result = await fetchForecastData.json(); 
            const weatherArray = result.DailyForecasts;  */
          
            const fetchForecastData = await fetch('http://localhost:3001/tasks');
            const weatherArray  = await fetchForecastData.json();
          
            const city = 'Izmir'
            const neighborhood = 'Alaybey'
            const processedData = extractDataFromResponse(weatherArray);
            setWeatherData({processedData, city, neighborhood }); 
         

        }
        catch (e) {
            setWeatherData(e);
        }
    }

    return { getWeatherData, weatherData }
    
}


const useLocationKey = () => {
    const [locationKey, setLocationKey] = useState();
    const getLocationKey = async () => {
        const getApiKey = await fetch(`${API_URL}${API_SEARCH}?apikey=${API_KEY}&q=${latitude},${longitude}`);
        const getResponse = await getApiKey.json(); 
        const locationKey = await getResponse.Key;
        setLocationKey(locationKey)
    }

    return {getLocationKey, locationKey};
}


const extractDataFromResponse = (daysArray) => {
    return daysArray.map(day => {
        const newDate = new Date(day.Date);

        const obj = {
            date: newDate.getMonth() + '/' + newDate.getDate() ,
            iconId: setCorrectId(day.Day.Icon),
            description: day.Day.IconPhrase,
            maxTemp: covertFtoC(day.Temperature.Maximum.Value),
            minTemp: covertFtoC(day.Temperature.Minimum.Value) + '℃'
            }

        return obj;
    })
}

const covertFtoC = (degrees) => Math.floor(5 / 9 * (degrees - 32));

const setCorrectId = (id) => {
    if (String(id).length !== 2) {
        return '0'+ id
    } 
    return id
}

export { useWeatherData, API_URL, API_KEY, API_SEARCH_BY_CITY, useLocationKey };