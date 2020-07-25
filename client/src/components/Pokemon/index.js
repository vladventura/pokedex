import React from "react";
import {useHistory} from 'react-router-dom';
import "./index.css";
import { COLOR_MAP } from "../../constants";

const Pokemon = (props) => {
  const history = useHistory();
  const { childId, name, description, type1 } = props;
  const style = {
    "--color": COLOR_MAP[type1],
    "--color2": props.type2 ? COLOR_MAP[props.type2] : COLOR_MAP[type1],
  };

  const handleClick = () => {
    history.push('/pokemon/' + childId);
  }

  return (
    <div className="card pokemon-card" style={style} data-testid="pokemon-card-container">
          <img
            data-testid="pokemon-img"
            className="card-img"
            alt="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${childId}.png`}
            onClick={handleClick}
          />
        <div className="card-body">
          <div className="card-title text" data-testid="pokemon-name">
            {name}
            </div>
          <div className="card-text text" data-testid="pokemon-description">{description}</div>
        </div>
    </div>
  );
};

export default Pokemon;
