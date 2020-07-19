import React from "react";
import Card from "react-bootstrap/Card";
import "./Pokemon.css";
import LazyLoad from "react-lazyload";
import { COLOR_MAP } from "../constants";

const Pokemon = (props) => {
  const { childId, name, description, type1 } = props;
  const style = {
    "--color": COLOR_MAP[props.type1],
    "--color2": props.type2 ? COLOR_MAP[props.type2] : COLOR_MAP[props.type1],
  };
  console.log(type1);
  return (
    <Card className="pokemon-card">
      <LazyLoad offset={100} once={true}>
        <img
          style={style}
          className="card-img"
          as="img"
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${childId}.png`}
        />
      </LazyLoad>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Pokemon;
