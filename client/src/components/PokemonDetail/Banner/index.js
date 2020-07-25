import React from "react";
import "./index.css";
import { toUpperCase } from "../../utils";

const Banner = ({ name, pokeId }) => {
  return (
    <div className="row banner">
      <div className="col icon-id">
        <img
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
        />
        <span>No.{pokeId}</span>
      </div>
      <div className="col name-banner">
        <span>{toUpperCase(name)}</span>
      </div>
    </div>
  );
};

export default Banner;
