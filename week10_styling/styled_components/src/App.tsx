import React from 'react';
import './App.css';
import { Button } from './Components/Button';
import { ThemedButton } from './Components/Button/ButtonTheme';
import { CssButton } from './Components/ButtonCss/ButtonCssComponent';
import { Loader } from './Components/Loader';
import { TextInput } from './Components/TextInput';


function App() {
  return (
    <div className="App">
    <ThemedButton/>
    <CssButton color={'red'}>Something</CssButton>
   </div>
  );
}

export default App;
