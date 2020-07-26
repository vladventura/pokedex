import React, { useState } from "react";
import ThrottledInput from "../ThrottledInput";
import PokemonList from "../PokemonList";

const MainScreen = () => {
  const [name, setName] = useState("");

  return (
    <div className="container-fluid" align="center">
      <ThrottledInput
        value={name}
        onChange={(value) => setName(value)}
        id="name"
      />
      <div className="container-fluid">
        <PokemonList startsWith={name} />
      </div>
    </div>
  );
};

export default MainScreen;
