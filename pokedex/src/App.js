import { useState } from 'react';
import SearchBar from './components/searchBar';
import DisplayPokemon from './components/display-pokemon';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [loadMsg, setLoadMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchPokemon = async (name, param) => {
    if (param === 'name') {
      if (!name) return setErrorMsg('Please enter a valid name or id number!')
      const query = `https://pokeapi.co/api/v2/pokemon/${name}/`
      setLoadMsg('fetching pokemon data...');
      setErrorMsg('');
      try {
        const pokemonResponse = await fetch(query);
        setLoadMsg('');
        if (pokemonResponse.status === 404) return setErrorMsg(`'${name}' is an invalid search name!`);
        return setPokemonData(await pokemonResponse.json());
      } catch (err) {
        console.log('error', err);
      }
    } else {
      console.log('type search method here');
    }

  }

  return (
    <div className="App">
      <h1>POKEDEX SEARCH</h1>
      <p className="load-msg">{loadMsg}</p>
      <p className="error-msg">{errorMsg}</p>
      <SearchBar onSearch={fetchPokemon} />
      <DisplayPokemon pokemonInfo={pokemonData} />
    </div>
  );
}

export default App;
