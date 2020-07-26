import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import { COLOR_MAP } from "../../constants";
import ContentLoader from "react-content-loader";

const Pokemon = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const history = useHistory();
  const { childId, name, description, type1 } = props;
  const style = {
    "--color": COLOR_MAP[type1],
    "--color2": props.type2 ? COLOR_MAP[props.type2] : COLOR_MAP[type1],
  };

  const handleClick = () => {
    history.push("/pokemon/" + childId);
  };

  const imageLoader = (loaderSettings) => {
    return (
      <ContentLoader
        speed={2}
        width={318}
        height={318}
        viewBox="0 0 318 318"
        backgroundColor="#EBEBDA"
        foregroundColor="#FFFFFC"
        {...loaderSettings}
      >
        <rect x="0" y="0" rx="0" ry="0" width="330" height="330" />
      </ContentLoader>
    );
  };

  return (
    <div
      className="card pokemon-card"
      style={style}
      data-testid="pokemon-card-container"
    >
      {!isLoaded && imageLoader()}

      {childId && (
        <img
          data-testid="pokemon-img"
          className="card-img"
          alt="pokemon"
          style={{ display: isLoaded ? "flex" : "none" }}
          onLoad={() => setIsLoaded(true)}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${childId}.png`}
          onClick={handleClick}
        />
      )}
      <div className="card-body">
        <div className="card-title text" data-testid="pokemon-name">
          {name}
        </div>
        <div className="card-text text" data-testid="pokemon-description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
