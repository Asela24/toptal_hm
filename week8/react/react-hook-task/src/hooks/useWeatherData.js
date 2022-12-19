import { useState } from "react";
import { getBasicInformationByCoords, getForecastData } from "../requests";

const useWeatherData = ({ latitude, longitude }) => {

    const [weatherData, setWeatherData] = useState('loading');
    const [basicInformation, setBasicInfo] = useState();

    const getWeatherData  = async () => {
        try {
            const { locationKey, city, neighborhood } = await getBasicInformationByCoords(latitude, longitude);

            const weatherData = await getForecastData(locationKey)

            setBasicInfo({city, neighborhood})
            setWeatherData(weatherData); 
        }
        catch (e) {
            setWeatherData(e);
        }
    }

    return { getWeatherData, weatherData, basicInformation }
}


export { useWeatherData };