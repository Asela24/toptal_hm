
import "./App.css";
import Light from "./Light";
import { useState } from 'react';


export default function App() {
  const [isOffClass, setOffClass] = useState('');
  const colorsArray = ['red', 'yellow', 'blue', 'green', 'red', 'yellow', 'blue', 'green'];

  const isLampTurnedOff = () => {
      if (isOffClass === 'off') {
        return true
      } 
      return false
  }

  return (
    <main>
      <section className="lights">
        {colorsArray.map(valueOfColor => 
          <Light color={valueOfColor} offClass={isOffClass} />
        )}
      </section>
      <section className="buttons">
        <button onClick={() => isLampTurnedOff() ? setOffClass('') : setOffClass('off')}>
          {isLampTurnedOff() ? 'Turn on' : 'Turn off'}
        </button>
      </section>
    </main>
  );
}

