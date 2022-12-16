import './style.css'
import { useState, useRef } from 'react';
import { API_KEY, API_URL, API_SEARCH_BY_CITY } from '../../hooks/useWeatherData';


const SearchComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const buttonRef = useRef();

    const handleInputChange = (value) => {
        setInputValue(value);
        if (value.match(/[A-Za-z]/) || value.match(/[A-Za-z]\s[A-Za-z]\D/)) {
            buttonRef.current.disabled = false;
        }
        else {
            buttonRef.current.disabled = true;
        }
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const result = await fetch(`${API_URL}${API_SEARCH_BY_CITY}?apikey=${API_KEY}&q=${inputValue}`)
        const resultJson = await result.json()
        console.log(resultJson[0].Key)// get api key
    
    }


    return (
        <form className='inputContainer' onSubmit={(e) => handleSubmit(e)}>
            <input id='cityInput' placeholder="Enter your city" value={inputValue} onChange={e => handleInputChange(e.target.value)} required></input>
            <button ref={buttonRef} disabled>Send</button>
        </form>
    )
}


export default SearchComponent;