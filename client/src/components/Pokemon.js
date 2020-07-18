import React from "react";
const Pokemon = (props) => {
  const { childId, name, description } = props;
  return (
    <div className="row" id={childId}>
      <div className="col s9 m12">
        <div className="card sticky-action horizontal small green">
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
