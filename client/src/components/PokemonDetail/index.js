import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import "./index.css";
import { COLOR_MAP } from "../../constants";
import PokedexBanner from "./PokedexBanner";
import PokedexTable from "./PokedexTable";

const PokemonDetail = (props) => {
  const id = props.match.params.id;

  const POKEMON_BY_ID = gql`
        query{
            pokemon (id: ${id}) {
                name
                description
                type1
                type2
            }
        }
    `;

  const { data, loading } = useQuery(POKEMON_BY_ID);

  if (loading) {
    return <div>Loading Data</div>;
  } else {
    const { type1, type2, name, description } = data.pokemon;
    const color1 = COLOR_MAP[type1];
    const color2 = type2 ? COLOR_MAP[type2] : color1;
    const style = {
      "--color1": color1,
      "--color2": color2,
    };
    return (
      <div className="container-grid pokemon-grid" style={style}>
        <div className="grid-layout">
          <div className="col pokemon-left-side">
            <img
              className="img-fluid pokemon-image"
              alt="pokemon"
              src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            />
          </div>
          <div className="col pokemon-right-side">
            <PokedexBanner name={name} pokeId={id} />
            <div className="pokemon-info">
              <div className="row pokemon-species">Pokemon Species Text</div>
              <PokedexTable
                generation="I"
                height={`6'13"`}
                weight="266.7 lbs."
                type1={type1}
                type2={type2 || ""}
                classes="row pokemon-table"
              />
              <div className="row pokedex-entry">
                <span>{description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PokemonDetail;
