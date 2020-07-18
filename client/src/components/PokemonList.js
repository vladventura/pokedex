import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Pokemon from "./Pokemon";
import LazyLoad from "react-lazyload";

const PokemonList = (props) => {
  const QUERY_POKEMON = props.startsWith
    ? gql`
      query{
        pokemons (startsWith: "${props.startsWith}") {
          id
          name
          description
        }
      }
    `
    : gql`
        query {
          pokemons {
            id
            name
            description
          }
        }
      `;
  const { data, loading } = useQuery(QUERY_POKEMON);
  if (loading && !data) {
    return (
      <div>
        <p>Loading pokemon</p>
      </div>
    );
  } else {
    if (data.pokemons.length) {
      return data.pokemons.map(({ id, name, description }) => {
        const capName = name[0].toUpperCase() + name.slice(1);
        return (
          <LazyLoad height={300} offset={200}>
            <Pokemon
              key={name}
              childId={id}
              name={capName}
              description={description}
            />
          </LazyLoad>
        );
      });
    } else {
      return (
        <div>
          <p>Pokemon not found</p>
        </div>
      );
    }
  }
};

export default PokemonList;
