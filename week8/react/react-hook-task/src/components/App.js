import '../style/style.css';
import '../style/variables.css';
import { useCurrentPosition} from '../hooks/useCurrentPosition';
import { useEffect } from 'react';
import Loading from './Loading';
import WeatherContainer from './WeatherContainer';
import SearchComponent from './SearchComponent/SearchComponent';


 
function App() {
 
  const { getLocationCoords, locationCoords: {state, coords}} = useCurrentPosition();
 
  useEffect(() => {
    getLocationCoords()
  }, [])

  const changeComponentsRender = () => {
    let stateRender;
    switch (state) {
      case 'success': {
        stateRender = <WeatherContainer coords={coords}/>
        break;
      } 
      case 'error' : {
        stateRender = <SearchComponent />
        break;
      }
      default: {
        stateRender = <Loading />
      }
    }
    return stateRender;
  }

 
  return (
    <main className="page">
      {changeComponentsRender()}
    </main>
  );
}

export default App;
