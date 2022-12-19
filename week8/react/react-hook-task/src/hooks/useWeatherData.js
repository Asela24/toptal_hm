import { useState } from "react";

const useWeatherData = ({latitude, longitude}) => {

    const [weatherData, setWeatherData] = useState('loading');

    const getWeatherData  = async () => {
        try {

            const { locationKey, city, neighborhood }= await getBasicInformationByCoords(latitude, longitude);
            console.log(locationKey, city, neighborhood)

            const { weatherDayData } =  await getForecastData(locationKey)
        
            const weatherData  = extractDataFromResponse(weatherDayData);
            setWeatherData({weatherData , city, neighborhood}); 
         

        }
        catch (e) {
            setWeatherData(e);
        }
    }

    return { getWeatherData, weatherData }
    
}



const getBasicInformationByCoords = async (latitude, longitude) => {

    const getApiKey = await fetch(`${API_URL}${API_SEARCH}?apikey=${API_KEY}&q=${latitude},${longitude}`);
    const getResponse = await getApiKey.json(); 
    const locationKey = await getResponse.Key;
    const { AdministrativeArea : { EnglishName : city }, LocalizedName: neighborhood }  = await getResponse;

    return { locationKey, city, neighborhood };
}




const getForecastData = async (locationKey) => {
      const fetchForecastData = await fetch(`${API_URL}${API_FORECAST}${locationKey}?apikey=${API_KEY2}`); 
      const result = await fetchForecastData.json(); 
    
      const weatherDayData = result.DailyForecasts; 
    
      return { weatherDayData }
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

export { useWeatherData, API_URL, API_KEY, API_SEARCH_BY_CITY };