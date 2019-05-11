import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Signup from "./components/signup";
import Login from "./components/login";

import ProfileContainer from "./containers/profileContainer";
import CompanyContainer from "./containers/companyContainer";
import EmployeeContainer from "./containers/employeeContainer";
import ManagerContainer from "./containers/managerContainer"

const loggedIn = () => !!sessionStorage["jwt"];

const logout = () => {
  if (sessionStorage["jwt"]) sessionStorage.removeItem("jwt");

  return <Redirect to="/login" />;
};

export default (
  <BrowserRouter>

      <Switch id='routes'>
        <Route exact path="/signup" component={Signup}  />
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
        <Route
          path="/employeeContainer"
          component={EmployeeContainer}
          loggedIn={loggedIn()}
        />
        <Route
          path="/managerContainer"
          component={ManagerContainer}
          loggedIn={loggedIn()}
        />
        <Route path="/logout" component={() => logout()} />
      </Switch>

  </BrowserRouter>
);
