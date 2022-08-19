function DisplayPokemon (props) {

  console.log('display passed', props.pokemonInfo)
  if (props.pokemonInfo) {
    return (
      <div id="display-pokemon">
        <img src={props.pokemonInfo.sprites.front_default} alt={props.pokemonInfo.name}></img>
        <p>ID Number: {props.pokemonInfo.id}</p>
        <p>Name: {props.pokemonInfo.name}</p>
        <p>Height: {props.pokemonInfo.height}</p>
        <p>Weight: {props.pokemonInfo.weight}</p>
      </div>
    )
  }
}

export default DisplayPokemon
