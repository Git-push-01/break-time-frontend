import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import Signup from "./components/signup";
import Login from "./components/login";

import ProfileContainer from "./containers/profileContainer";
import CompanyContainer from "./containers/companyContainer";

const loggedIn = () => !!sessionStorage["jwt"];

const logout = () => {
  if (sessionStorage["jwt"]) sessionStorage.removeItem("jwt");

  return <Redirect to="/login" />;
};

export default (
  <Router>
    <div>
      <Switch>
        <Route exact path="/signup" component={Signup} loggedInin={loggedIn()} />
        <Route path="/login" component={Login} loggedIn={loggedIn()} />

        <Route
          path="/profileContainer"
          component={ProfileContainer}
          loggedIn={loggedIn()}
        />
        <Route
          path="/companyContainer"
          component={CompanyContainer}
          loggedIn={loggedIn()}
        />
        <Route path="/logout" component={() => logout()} />
      </Switch>
    </div>
  </Router>
);
