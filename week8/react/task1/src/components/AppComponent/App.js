import ButtonBarComponent from '../ButtonBarComponent/ButtonBarComponent';
import ListComponent from '../ListComponent/ListComponent';
import './App.css'
import React, { useState } from 'react';

function App() {
  const [colorArray, setColorsArray] = useState([]);
  return (
    <main>
      <ButtonBarComponent setColorArr={setColorsArray} colorsArray={colorArray}/>
      <ListComponent colorsArray={colorArray}/>
    </main>
  );
}

export default App;
