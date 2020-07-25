import React from "react";
import "./index.css";
const PokedexTable = ({
  type1,
  type2,
  height,
  weight,
  generation,
  classes,
}) => {
  return (
    <div className={classes}>
      <table className="table pokedex-table">
        <tbody>
          <tr>
            <th className="pokedex-table-header" scope="col">
              <span>Type</span>
            </th>
            <td className="pokedex-table-data">
              <span>
                {type1} {type2 || ""}
              </span>
            </td>
          </tr>
          <tr>
            <th className="pokedex-table-header" scope="col">
              <span>Height</span>
            </th>
            <td className="pokedex-table-data">
              <span>{height}</span>
            </td>
          </tr>
          <tr>
            <th className="pokedex-table-header" scope="col">
              <span>Weight</span>
            </th>
            <td className="pokedex-table-data">
              <span>{weight}</span>
            </td>
          </tr>
          <tr>
            <th className="pokedex-table-header" scope="col">
              <span>Generation</span>
            </th>
            <td className="pokedex-table-data">
              <span>{generation}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokedexTable;
