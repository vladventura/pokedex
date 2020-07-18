import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import "./components/ThrottledInput";
import ThrottledInput from "./components/ThrottledInput";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <form className="center">
        <div className="App container">
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <ThrottledInput
              value={name}
              onChange={(value) => setName(value)}
              id="name"
            />
          </div>
        </div>
      </form>
      <PokemonList startsWith={name} />
    </div>
  );
}

export default App;
