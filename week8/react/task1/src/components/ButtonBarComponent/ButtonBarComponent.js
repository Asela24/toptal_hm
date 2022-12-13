import './ButtonBar.style.css';
import randomColorGenerator from '../../utils/randomColorGenerator';
import React, { useState } from 'react';

const ButtonBarComponent = ({ setColorArr }) => {
    const [count, setCount] = useState(0);

    const addColorToList = () => {
        const randomColor = randomColorGenerator();
        setColorArr(oldArray => [randomColor, ...oldArray]); 
        setCount(value => value + 1);
    }

    const deleteColorFromList = () => {
            setCount(value => value - 1);
            setColorArr(oldArray => oldArray.slice(0, -1));
    }

    return (
        <div className="button_container">
            <button onClick={addColorToList} disabled={count > 8 ? true : false}>+</button>
            <div className='countNumber'>{count}</div>
            <button onClick={deleteColorFromList} disabled={count > 0 ? false : true}>-</button>
        </div>
    )
}

export default ButtonBarComponent;