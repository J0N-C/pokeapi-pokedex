import { useState } from 'react';
import SearchBar from './components/searchBar';
import DisplayPokemon from './components/display-pokemon';
import checkGeneration from './components/checkGeneration';
import GlobalStyle from "./components/createGlobalStyle";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isList, setIsList] = useState(null)
  const [loadMsg, setLoadMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchPokemon = async (name, param) => {
    let query = 'https://pokeapi.co/api/v2/'
    if (param === 'name') {
      if (!name) return setErrorMsg('Please enter a valid name or id number!')
      query += `pokemon/${name}/`
    } else if (param === 'type') {
      if (!name) return setErrorMsg('Please enter a valid type or type id!')
      query += `type/${name}/`
    }
    setLoadMsg('fetching pokemon data...');
    setErrorMsg('');
    try {
      const pokemonResponse = await fetch(query);
      setLoadMsg('');
      if (pokemonResponse.status === 404) return setErrorMsg(`'${name}' is an invalid search name!`);
      let result = await pokemonResponse.json()
      if (param === 'name') {
        if (result.id > 151) {
          return setErrorMsg(`#${result.id} ${result.name} is not a Gen 1 Pokemon!`)
        }
        setIsList(false);
        return setPokemonData(result);
      } else if (param === 'type') {
        const lookupList = checkGeneration(result.pokemon, 151);
        const resList = lookupList.map(async pokemon => {
          const res = await fetch(pokemon.pokemon.url);
          const pokemonToBeAdded = await res.json()
          return pokemonToBeAdded;
        })
        return Promise.all(resList).then(values => {
          setIsList(true);
          if (values.length < 1) return setErrorMsg(`No Gen 1 pokemon of this type!`)
          return setPokemonData(values)});
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
      <DisplayPokemon pokemonInfo={pokemonData} isDataList={isList} />
    </div>
  );
}

export default App;
