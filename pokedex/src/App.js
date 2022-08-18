import { useEffect, useState } from 'react';
import SearchBar from './components/searchBar';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setLoad] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  /* useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
      .then(res => res.json())
      .then(pokemon => setPokemonData(pokemon))
      .then(setLoad(false));
  }, []); */

  const fetchPokemon = name => {
    const query = `https://pokeapi.co/api/v2/pokemon/${name}/`
    setLoad(true);
    fetch(query)
      .then(res => {
        if (res.status === 404) {
          return setErrorMsg('Invalid search name!');
        } else {
          return res.json();
        }
      })
      .then(pokemon => setPokemonData(pokemon))
      .then(setLoad(false))
      .catch(err => console.log(err));
  }

  if (!isLoading) {
    if (pokemonData) {
      console.log(pokemonData, pokemonData.name, pokemonData.id);
    }
  }

  return (
    <div className="App">
      <h1>POKEDEX SEARCH</h1>
      <p className="error-msg">{errorMsg}</p>
      <SearchBar onSearch={fetchPokemon} />
    </div>
  );
}

export default App;
