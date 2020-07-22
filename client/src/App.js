import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import "./components/ThrottledInput";
import ThrottledInput from "./components/ThrottledInput";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="container" align="center" fluid>
      <ThrottledInput
        value={name}
        onChange={(value) => setName(value)}
        id="name"
      />
      <PokemonList startsWith={name} />
    </div>
  );
}

export default App;
