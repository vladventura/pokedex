import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import Pokemon from "./Pokemon";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
      let content = data.pokemons.map(({ id, name, description }) => {
        let capName = name[0].toUpperCase() + name.slice(1);
        return (
          <Pokemon
            key={capName}
            id={name}
            childId={id}
            name={capName}
            description={description}
          />
        );
      });
      return (
        <Col>
          <Row>{content}</Row>
        </Col>
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
