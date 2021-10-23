import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Navigation, RRequests, RHistory, RMakeRequest} from "components";

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={() => <RRequests />} />
          <Route path="/makerequests" exact component={() => <RMakeRequest />} />
          <Route path="/history" exact component={() => <RHistory />} />
        </Switch>
      </div>
    </Router>
  );
}

