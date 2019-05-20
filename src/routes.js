import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Signup from "./components/signup";
import Login from "./components/login";

import ProfileContainer from "./containers/profileContainer";
import CompaniesForm from "./components/companiesForm"
import EmployeesForm from "./components/employeesForm"
import ManagersForm from "./components/managersForm"
import BreaksForm from "./components/breaksForm"



const loggedIn = () => !!sessionStorage["jwt"];

const logout = () => {
  if (sessionStorage["jwt"]) sessionStorage.removeItem("jwt");

  return <Redirect to="/login" />;
};

export default (
  <BrowserRouter>

      <Switch >
        <Route exact path="/signup" component={Signup}  />
         <Route path="/login" component={Login} loggedIn={loggedIn()} />


        <Route
          path="/profileContainer"
          component={ProfileContainer}
          loggedIn={loggedIn()}
        />
        <Route
          path="/companiesForm"
          component={CompaniesForm}
          loggedIn={loggedIn()}
        />
        <Route
          path="/employeesForm"
          component={EmployeesForm}
          loggedIn={loggedIn()}
        />
        <Route
          path="/managersForm"
          component={ManagersForm}
          loggedIn={loggedIn()}
        />
        <Route
          path="/breaksForm"
          component={BreaksForm}
          loggedIn={loggedIn()}
        />
        <Route path="/logout" component={() => logout()} />
      </Switch>

  </BrowserRouter>
);
