import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";

import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
