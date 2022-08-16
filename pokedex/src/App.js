import { useEffect, useState } from 'react';
import SearchBar from './components/searchBar';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => res.json())
      .then(pokemon => setPokemonData(pokemon))
      .then(setLoad(false));
  }, []);

  if (!isLoading) {
    if (pokemonData) {
      console.log(pokemonData.name, pokemonData.id);
    }
  }


  return (
    <div className="App">
      <h1>BLANK</h1>
      <p></p>
      <SearchBar />
    </div>
  );
}

export default App;
