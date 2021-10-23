import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import RHistory from "./components/RHistory";
import RMakeRequest from "./components/RMakeRequest";
import RRequests from "./components/RRequests";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/RRequests" exact component={() => <RRequests />} />
          <Route path="/makerequests" exact component={() => <RMakeRequest />} />
          <Route path="/history" exact component={() => <RHistory />} />
        </Switch>
      </div>
    </Router>
  );
}

