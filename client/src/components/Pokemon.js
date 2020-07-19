import React from "react";
import './Pokemon.scss'

const Pokemon = (props) => {
  const { childId, name, description } = props;
  return (
    <div className="row" id={childId}>
      <div className="col s9 m12">
        <div className="card horizontal small pokemon-container">
            <div className="card-image">
              <img
                className="responsive-img"
                alt="pokemon"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${childId}.png`}
              />
              <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
              <p>{description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
