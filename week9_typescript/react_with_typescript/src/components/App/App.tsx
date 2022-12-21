import './App.css';
import Card from '../Card';
import useAnimeData from '../../hook/useAnimeData';

function App() {

  const result = useAnimeData();

  if (result === 'error') {
    return (
      <h1>Error ocurred</h1>
    )
  }

  if (result === 'loading') {
    return (
      <div>loading</div>
    )
  }

  return (
    <div className="App">
      {result.map((card, index) => <Card key={index} item={card} /> )}
    </div>
  );
}

export default App;


