import React from "react";
import {MainScreen, PokemonDetail} from "./components/";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path="/pokemon/:id" component={PokemonDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
