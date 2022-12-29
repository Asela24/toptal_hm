import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Picasso from '@toptal/picasso-provider/Picasso';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Picasso>
     <App />
    </Picasso>
);

