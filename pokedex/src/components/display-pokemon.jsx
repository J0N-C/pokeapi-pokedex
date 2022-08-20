function DisplayPokemon (props) {
  if (props.pokemonInfo) {
    const {id, name, height, weight, sprites} = props.pokemonInfo;
    return (
      <div id="display-pokemon">
        <img src={sprites.front_default} alt={props.pokemonInfo.name}></img>
        <p>ID Number: {id}</p>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </div>
    )
  }
}

export default DisplayPokemon
