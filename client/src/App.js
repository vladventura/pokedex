import React from "react";
import MainScreen from "./components/MainScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        {/* For later. Uncomment this when ready */}
        {/* <Route path="/pokemon/:id" component={PokemonDetails} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
