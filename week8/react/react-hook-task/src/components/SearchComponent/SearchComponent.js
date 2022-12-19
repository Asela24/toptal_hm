import './style.css'
import { useState, useRef } from 'react';
import { getBasicInformationByCityName, getForecastData } from '../../requests';
import WeatherDataContainer from '../WeatherDataContainer/WeatherDataContainer';
import { validateInput } from '../../utils';

const SearchComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [weatherData, setWeatherData] = useState();
    const [basicInformation, setBasicInfo] = useState();
    const buttonRef = useRef();

    const handleInputChange = (value) => {
        setInputValue(value);
        validateInput(value, buttonRef);
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const { locationKey, city, neighborhood } = await getBasicInformationByCityName(inputValue);
        const  weatherData  = await getForecastData(locationKey);
        setWeatherData(weatherData); 
        setBasicInfo({city, neighborhood})     
        
    }


    return (
        <>
        {weatherData 
        ? <WeatherDataContainer weatherData={weatherData} basicInformation={basicInformation}/> 
        : <form className='inputContainer' onSubmit={(e) => handleSubmit(e)}>
            <input id='cityInput' placeholder="Enter your city" value={inputValue} onChange={e => handleInputChange(e.target.value)} required></input>
            <button ref={buttonRef} disabled>Send</button>
          </form>} 
        </>      
    )
}

export default SearchComponent;