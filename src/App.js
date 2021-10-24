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
import DMakeListing from "./components/DMakeListing";
import DHistory from "./components/DHistory";
import logo from "./components/files/RW.png";
import DListing from './components/Donations/Donations'

export default function App() {
  return (
    <Router>
        <img
              class="logo"
              src={logo}
              alt=""
            />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/Requests" exact component={() => <RRequests />} />
          <Route path="/makerequests" exact component={() => <RMakeRequest />} />
          <Route path="/Rhistory" exact component={() => <RHistory />} />
          <Route path="/Listings" exact component={() => <DListing />} />
          <Route path="/MakeListing" exact component={() => <DMakeListing />} />
          <Route path="/Dhistory" exact component={() => <DHistory />} />
        </Switch>
    </Router>
  );
}

