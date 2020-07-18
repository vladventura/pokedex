import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const Pokemon = (props) => {
  const QUERY_POKEMON = props.startsWith
    ? gql`
      query{
        pokemons (startsWith: "${props.startsWith}") {
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
  if (loading) {
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
          <div id={id} key={name}>
            <p>
              {capName}: {description}
            </p>
          </div>
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

export default Pokemon;
