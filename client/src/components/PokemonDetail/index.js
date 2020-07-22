// We will need Apollo here for GQL queries
// We will get the pokemon from the id from the router
// We will request to the Django backend for that singular Pokemon with an id
// We will display a page with the info about the Pokemon
// For now, we can create a big container that has the image on the left, the name on top of it and the description below it
// When we have that data we can come back and display the generation it was introduced in and the ones it shows up in,
// moves, exp rate, egg hatch rate... you name it


import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';


const PokemonDetail = (props) => {

    return (
        <div className="container pokemon-grid">
            <div className="container pokemon-grid-top">
                <div className="container pokemon-image">
                    <img
                        data-testid="pokemon-img"
                        className="card-img"
                        alt="pokemon"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
                    />
                </div>
                <div className="container pokemon-name">
                    <span>
                        Pokemon Name here
                    </span>
                </div>
            </div>
            <div className="container pokemon-grid-body">
                <div className="container pokemon-description"></div>
            </div>
        </div>);

};

export default PokemonDetail;
