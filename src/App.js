import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Forecast from "./Pages/Forecast";
import Users from "./Pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Forecast}></Route>
        <Route path="/user" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
