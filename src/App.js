import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import './App.css';
import { Route, Switch } from "react-router-dom";
import Companies from './components/companies'
import Managers from './components/managers'
import Employees from './components/employees'
import Breaks from './components/breaks'
import Signup from "./components/signup";
import Login from "./components/login";
import { connect } from "react-redux";
import { getUsers } from "./redux/actions/actions";


class App extends Component {
  state = {
    errors: false,
    auth: { email: "", password: "" }
  };

  componentDidMount() {
    const URL = "http://localhost:3001/users";
    if (localStorage.getItem("jwt")) {
      fetch(URL, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("jwt")
        }
      })
        .then(res => res.json())
        .then(user => {
          if (!user.error) {
            return this.props.currentUser;
          } else {
            this.logout();
          }
        });
    }
  }

  logout = () => {
    localStorage.removeItem("jwt");
  };

  render() {
    return (
      <div className="App">
        <Switch location={this.props.location}>
          <Route
            exact
            path="/signup"
            render={routerProps => <Signup {...routerProps} />}
          />


        </Switch>
      </div>
    );
  }
}



export default App
