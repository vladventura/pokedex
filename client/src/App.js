import React, { useState } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Pokemon from "./Pokemon";

const clt = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});

function App() {
  const [name, setName] = useState("");

  return (
    <ApolloProvider client={clt}>
      <div className="container">
        <form className="center">
          <div className="App container">
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                onChange={(event) => setName(event.target.value)}
                value={name}
                delay={1000}
                id="name"
                autoComplete="off"
                type="text"
              ></input>
            </div>
          </div>
        </form>
        <Pokemon startsWith={name} />
      </div>
    </ApolloProvider>
  );
}

export default App;
