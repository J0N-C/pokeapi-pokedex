import styled from "styled-components";
import {Pokemon} from "../types";

const StyledInfoCard = styled.div`
  max-width: 100%;
  border-radius: 6px;
  border: 2px solid black;
  background-color: beige;
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

const ListItem = styled.li`
  width: 20%;

  @media (max-width: 768px) {
    width: calc(100%/3);
  }

  @media (max-width: 320px) {
    width: 100%;
  }

`

const ListContainer = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const PText = styled.p`
  margin: 1rem 0;
  padding: 0.25rem;
  background-color: white;
  border-radius: 6px;
`

function DisplayPokemon (props: any) {
  let pokemonList;
  if (props.pokemonInfo) {
    if (!props.isDataList) {
      pokemonList = <ListItem>{infoCard(props.pokemonInfo)}</ListItem>
    } else {
      pokemonList = props.pokemonInfo.map((pokemon: Pokemon) =>
        <ListItem key={pokemon.id}>
          {infoCard(pokemon)}
        </ListItem>
        );
    }
  }
  return (
    <ListContainer>
      {pokemonList}
    </ListContainer>
  )
}

const infoCard = (pokemon: Pokemon) => {
  const { id, name, height, weight, sprites } = pokemon;
  const typeList = pokemon.types.map((types: any, i: number) =>
    <PText key={types.slot}>{`Type ${types.slot}: ${types.type.name[0].toUpperCase() + types.type.name.slice(1)}`}</PText>
  );
  if (typeList.length === 1) {
    typeList.push(<PText>Type 2: None</PText>)
  }
  return (
    <StyledInfoCard className="display-pokemon">
      <ImageContainer>
        <PokemonImage src={sprites.front_default} alt={name}></PokemonImage>
      </ImageContainer>
      <PText>ID: {id}</PText>
      <PText>Name: {name[0].toUpperCase() + name.slice(1)}</PText>
      {typeList}
      <PText>Height: {height / 10} m</PText>
      <PText>Weight: {weight / 10} kg</PText>
    </StyledInfoCard>
  )
}

export default DisplayPokemon;
