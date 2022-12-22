
import './App.css';

import { SelectUserProvider } from '../context/SelectUserContext';
import SelectUser from '../SelectUser/SelectUser';

function App() {

  return (
    <SelectUserProvider>
      <SelectUser/>
    </SelectUserProvider>
  );
}

export default App;
