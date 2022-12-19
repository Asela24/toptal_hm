import WeatherCard from "../WeatherCard/WeatherCard";
import { useWeatherData, useLocationKey } from "../../hooks/useWeatherData";
import { useEffect } from "react";
import Loading from "../Loading";
import WeatherDataContainer from "../WeatherDataContainer/WeatherDataContainer";

const WeatherContainer = ({coords}) => {


    const  { getWeatherData, weatherData } = useWeatherData(coords);
    
    useEffect(() => {
        getWeatherData()
    }, [])
    
    return (
        <>
            {weatherData === 'loading' ? <Loading/> :  <WeatherDataContainer weatherData={weatherData} />}
        </>
    )
}

export default WeatherContainer;