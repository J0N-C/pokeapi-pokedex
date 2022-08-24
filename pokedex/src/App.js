import { useState } from 'react';
import SearchBar from './components/searchBar';
import DisplayPokemon from './components/display-pokemon';
import checkGeneration from './components/checkGeneration';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [dataType, setDataType] = useState('')
  const [loadMsg, setLoadMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchPokemon = async (name, param) => {
    let query = 'https://pokeapi.co/api/v2/'
    if (param === 'name') {
      if (!name) return setErrorMsg('Please enter a valid name or id number!')
      query += `pokemon/${name}/`
      setDataType('single');
    } else if (param === 'type') {
      if (!name) return setErrorMsg('Please enter a valid type or type id!')
      query += `type/${name}/`
      setDataType('array')
    }
    setLoadMsg('fetching pokemon data...');
    setErrorMsg('');
    try {
      const pokemonResponse = await fetch(query);
      setLoadMsg('');
      if (pokemonResponse.status === 404) return setErrorMsg(`'${name}' is an invalid search name!`);
      let result = await pokemonResponse.json()
      if (param === 'name') {
        return setPokemonData(result);
      } else if (param === 'type') {
        return setPokemonData(checkGeneration(result.pokemon, 151));
      }
    } catch (err) {
      console.log('error', err);
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
