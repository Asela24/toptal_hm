import './style.css'
import { useState, useRef } from 'react';
import { getBasicInformationByCityName, getForecastData } from '../../requests';
import WeatherDataContainer from '../WeatherDataContainer/WeatherDataContainer';

const SearchComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [weatherData, setWeatherData] = useState();
    const buttonRef = useRef();

    const handleInputChange = (value) => {
        setInputValue(value);
        validateInput(value, buttonRef);
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const { locationKey, city, neighborhood } = await getBasicInformationByCityName(inputValue);
        const  weatherData  = await getForecastData(locationKey);
        setWeatherData({weatherData, city, neighborhood}); 
          
    }

    return (
        <>
        {weatherData 
        ? <WeatherDataContainer weatherData={weatherData} /> 
        : <form className='inputContainer' onSubmit={(e) => handleSubmit(e)}>
            <input id='cityInput' placeholder="Enter your city" value={inputValue} onChange={e => handleInputChange(e.target.value)} required></input>
            <button ref={buttonRef} disabled>Send</button>
          </form>} 
        </>
        
    )
}

const validateInput = (value, buttonRef) => {
    if (value.match(/[A-Za-z]/) || value.match(/[A-Za-z]\s[A-Za-z]\D/)) {
        buttonRef.current.disabled = false;
    }
    else {
        buttonRef.current.disabled = true;
    }
}

export default SearchComponent;