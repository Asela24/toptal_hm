import { useWeatherData } from "../../hooks/useWeatherData";
import { useEffect } from "react";
import Loading from "../Loading";
import WeatherDataContainer from "../WeatherDataContainer/WeatherDataContainer";

const WeatherContainer = ({ coords }) => {

    const  { getWeatherData, weatherData, basicInformation } = useWeatherData(coords);
    
    useEffect(() => {
        getWeatherData()
    }, [])
    
    return (
        <>
            {weatherData === 'loading' ? <Loading/> :  <WeatherDataContainer weatherData={ weatherData } basicInformation={ basicInformation }/>}
        </>
    )
}

export default WeatherContainer;