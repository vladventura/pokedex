import React from "react";
import Card from "react-bootstrap/Card";
import "./Pokemon.css";
import LazyLoad from "react-lazyload";
import { COLOR_MAP } from "../constants";

const Pokemon = (props) => {
  const { childId, name, description, type1 } = props;
  const style = {
    "--color": COLOR_MAP[type1],
    "--color2": props.type2 ? COLOR_MAP[props.type2] : COLOR_MAP[type1],
  };
  return (
    <Card className="pokemon-card" data-testid="pokemon-card-container">
      <LazyLoad data-testid="lazyload-img" offset={200} once={true}>
        <img
          style={style}
          className="card-img"
          as="img"
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${childId}.png`}
        />
      </LazyLoad>
      <Card.Body>
        <Card.Title data-testid="pokemon-name">{name}</Card.Title>
        <Card.Text data-testid="pokemon-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;
