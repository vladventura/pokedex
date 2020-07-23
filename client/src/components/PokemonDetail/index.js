import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import './index.css';
import { COLOR_MAP } from '../../constants';
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
        const { type1, type2, name, description } = data.pokemon;
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
                        <div className="row container pokemon-info">
                            <div className="container row pokemon-species">Pokemon Species Text</div>
                            <div className="row table-responsive pokemon-table">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <td>{type1} {data.pokemon.type2 || ""}</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Height</th>
                                            <td>6'3"</td>
                                        </tr>
                                        <tr>
                                            <th>Weight</th>
                                            <td>266.7 lbs.</td>
                                        </tr>
                                        <tr>
                                            <th>Generation</th>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="container row pokemon-pokedex-entry">
                                <span>{description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
};

export default PokemonDetail;
