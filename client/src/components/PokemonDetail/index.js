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
