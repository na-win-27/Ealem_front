import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
