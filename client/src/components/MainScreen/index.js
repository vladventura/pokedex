import React, { useState } from "react";
import ThrottledInput from "../ThrottledInput";
import PokemonList from "../PokemonList";

const MainScreen = () => {
  const [name, setName] = useState("");

  return (
    <div className="container-grid" align="center">
      <ThrottledInput
        value={name}
        onChange={(value) => setName(value)}
        id="name"
      />
      <PokemonList startsWith={name} />
    </div>
  );
};

export default MainScreen;
