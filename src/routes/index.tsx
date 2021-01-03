import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../views/Home";
import About from "../views/About";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route path={`/about`} component={About} />
      </Switch>
    </Router>
  );
}
