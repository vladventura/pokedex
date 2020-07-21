import React from "react";
import "./index.css";
import { COLOR_MAP } from "../../constants";

const Pokemon = (props) => {
  const { childId, name, description, type1 } = props;
  const style = {
    "--color": COLOR_MAP[type1],
    "--color2": props.type2 ? COLOR_MAP[props.type2] : COLOR_MAP[type1],
  };
  return (
    <div className="card pokemon-card" data-testid="pokemon-card-container">
      <div className="pokemon-card-highlight" style={style}>
          <img
            className="card-img"
            alt="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${childId}.png`}
          />
        <div className="card-body">
          <div className="card-title text" data-testid="pokemon-name">
            {name}
            </div>
          <div className="card-text text" data-testid="pokemon-description">{description}</div>
        </div>
      </div>
    </div>

  );
};

export default Pokemon;
