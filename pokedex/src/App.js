import { useState } from 'react';
import SearchBar from './components/searchBar';
import DisplayPokemon from './components/display-pokemon';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setLoad] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchPokemon = async (name) => {
    const query = `https://pokeapi.co/api/v2/pokemon/${name}/`
    setLoad('fetching data...');
    setErrorMsg('');
    try {
      const pokemonResponse = await fetch(query);
      setLoad(false);
      if (pokemonResponse.status === 404) return setErrorMsg(`'${name}' is an invalid search name!`);
      return setPokemonData(await pokemonResponse.json());
    } catch(err) {
      console.log('error', err);
    }
  }

  const loadMsg = () => {
    if (isLoading) {
      return <p>{'Fetching pokemon data...'}</p>
    } else return;
  }


  return (
    <div className="App">
      <h1>POKEDEX SEARCH</h1>
      {loadMsg()}
      <p className="error-msg">{errorMsg}</p>
      <SearchBar onSearch={fetchPokemon} />
      <DisplayPokemon pokemonInfo={pokemonData} />
    </div>
  );
}

export default App;
