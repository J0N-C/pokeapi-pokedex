import styled from "styled-components";
import css from "styled-components";


const StyledInfoCard = styled.div`
  max-width: 20%;
  border-radius: 6px;
  border: 2px solid black;
  background-color: lightgray;
  margin: 0.5rem;
  padding: 1rem;
  font-size: 2rem;
`

const ImageContainer = styled.div`
  max-width: 100%;
  background-color: white;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid black;
`

const PokemonImage = styled.img`
  width: 100%;
`

function DisplayPokemon (props) {
  console.log(props);
  if (props.pokemonInfo) {
    if (!props.isDataList) {
      return infoCard(props.pokemonInfo);
    } else {
      const pokemonList = props.pokemonInfo.map(pokemon =>
        <li key={pokemon.id}>
          {infoCard(pokemon)}
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

const infoCard = (pokemon) => {
  const { id, name, height, weight, sprites } = pokemon;
  return (
    <StyledInfoCard className="display-pokemon">
      <ImageContainer>
        <PokemonImage src={sprites.front_default} alt={name}></PokemonImage>
      </ImageContainer>
      <p>ID Number: {id}</p>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </StyledInfoCard>
  )
}

export default DisplayPokemon
