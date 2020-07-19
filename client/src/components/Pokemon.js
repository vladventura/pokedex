import React from "react";
import Card from "react-bootstrap/Card";
import "./Pokemon.css";
import LazyLoad from "react-lazyload";

const Pokemon = (props) => {
  const { childId, name, description } = props;
  const style = {
    "--color": "red",
    "--color2": "blue",
  };
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
