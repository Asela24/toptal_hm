import { useState } from 'react';
import './TileComponent.style.css'

const TileComponent = ({color}) => { 
    const [isHidden, setElementVisibility] = useState(true);

    return (
         <div className='color__container' style={{backgroundColor: color}} onClick={() => setElementVisibility(!isHidden)}>
           <span hidden={isHidden} className='colorText'>{color}</span> 
        </div>
    )
}

export default TileComponent;