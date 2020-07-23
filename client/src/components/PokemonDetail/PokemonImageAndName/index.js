import React from 'react';
import './index.css';
import { toUpperCase } from '../../utils';


const PokemonImageAndName = ({ name, pokeId, color1, color2 }) => {
    const style = {
        "--color": color1,
        "--color2": color2,
      };
    return (
        <div className="pokemon-top" style={style}>
            <div className="container row">
                <span className="pokemon-name">
                    {toUpperCase(name)}
                </span>

            </div>

        </div>
    );
};

export default PokemonImageAndName;
