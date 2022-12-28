import React from 'react';
import './App.css';
import { Button } from './Components/Button';
import { Loader } from './Components/Loader';
import { TextInput } from './Components/TextInput';


function App() {
  return (
    <div className="App">
      <TextInput width='small' fontSize='small' />
      <TextInput width='full' placeholder='full width' />

      <Loader variant='error' size='small' />
      <Loader variant='black' speed='fast' />
      <Loader size='large' speed='slow' />
      
      <Button>button without any props</Button>
      <Button variant='secondary' size='small' active ='none' fontSize='small'>Small button</Button>
      <Button variant='danger' size='full' fontSize='large'>full Width</Button>
   </div>
  );
}

export default App;
