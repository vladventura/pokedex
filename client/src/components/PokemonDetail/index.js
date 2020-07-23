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
import './index.css';
import { COLOR_MAP } from '../../constants';
import { toUpperCase } from '../utils';
import Banner from './Banner';

const PokemonDetail = (props) => {
    const id = props.match.params.id;

    const POKEMON_BY_ID = (
        gql`
        query{
            pokemon (id: ${id}) {
                name
                description
                type1
                type2
            }
        }
    `
    );

    const { data, loading } = useQuery(POKEMON_BY_ID)

    if (loading) {
        return (<div>Loading Data</div>);
    } else {
        const { type1, type2, name } = data.pokemon;
        const color1 = COLOR_MAP[type1];
        const color2 = type2 ? COLOR_MAP[type2] : color1;
        const style = {
            "--color1": color1,
            "--color2": color2
        };
        return (
            <div className="container-grid pokemon-grid" style={style}>
                <div className="row">
                    <div className="col pokemon-left-side">
                        <img
                            className="img-fluid pokemon-image"
                            alt="pokemon"
                            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                        />
                    </div>
                    <div className="col pokemon-right-side">
                        <Banner name={name} pokeId={id} />
                    </div>
                </div>
            </div>);
    }
};

export default PokemonDetail;
