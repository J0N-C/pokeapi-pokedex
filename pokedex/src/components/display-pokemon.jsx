function DisplayPokemon (props) {
  console.log(props);
  if (props.pokemonInfo) {
    if (!props.isDataList) {
      return parseData(props.pokemonInfo);
    } else {
      const pokemonList = props.pokemonInfo.map(pokemon =>
        <li key={pokemon.id}>
          {parseData(pokemon)}
        </li>
        );
      return (
        <ul>
          {pokemonList}
        </ul>
      )
    }
  }
}

const parseData = (pokemon) => {
  const { id, name, height, weight, sprites } = pokemon;
  return (
    <div id="display-pokemon">
      <img src={sprites.front_default} alt={name}></img>
      <p>ID Number: {id}</p>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}

export default DisplayPokemon
