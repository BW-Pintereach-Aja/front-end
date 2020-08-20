import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;