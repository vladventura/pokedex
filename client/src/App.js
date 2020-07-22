import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import Container from "react-bootstrap/Container";
import "./components/ThrottledInput";


import ThrottledInput from "./components/ThrottledInput";

function App() {
  const [name, setName] = useState("");

  return (
    <Container align="center" fluid>
      <ThrottledInput
        value={name}
        onChange={(value) => setName(value)}
        id="name"
      />
      <PokemonList startsWith={name} />
    </Container>
  );
}

export default App;
