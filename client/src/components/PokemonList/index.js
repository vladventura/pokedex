import React from "react";
import { toUpperCase } from "../utils";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Pokemon from "../Pokemon";

export const GENERAL_QUERY = gql`
  query {
    pokemons {
      id
      name
      description
      type1
      type2
    }
  }
`;

const PokemonList = (props) => {
  const QUERY_POKEMON = props.startsWith
    ? gql`
      query{
        pokemons (startsWith: "${props.startsWith}") {
          id
          name
          description
          type1
          type2
        }
      }
    `
    : GENERAL_QUERY;

  const { data, loading } = useQuery(QUERY_POKEMON);

  if (loading && !data) {
    return <div>Loading...</div>;
  } else {
    if (data.pokemons.length) {
      return (
        <div className="row">
          {data.pokemons.map(({ id, name, description, type1, type2 }) => {
            let capName = toUpperCase(name);
            return (
              <Pokemon
                key={id}
                id={name}
                childId={id}
                name={capName}
                description={description}
                type1={type1}
                type2={type2}
              />
            );
          })}
        </div>
      );
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
