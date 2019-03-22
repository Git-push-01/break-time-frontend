import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import EmployeeContainer from "./containers/employeeContainer";
import ManagerContainer from "./containers/managerContainer";

import { connect } from "react-redux";
import { getUsers } from "./redux/actions/actions";

class App extends Component {
  state = {
    
    auth: { email: "", password: "" }
  };

  componentDidMount() {
    const URL = "http://localhost:3001/auth/register";
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
    console.log(this.state);
    return (
      <div className="App">
        <Switch location={this.props.location}>
          <Route
            exact
            path="/signup"
            render={routerProps => <Signup {...routerProps} />}
          />
          <Route
            exact
            path="/login"
            render={routerProps => <Login {...routerProps} />}
          />
          <Route
            exact
            path="/managerContainer"
            render={routerProps => <ManagerContainer {...routerProps} />}
          />
          <Route
            exact
            path="/employeeContainer"
            render={routerProps => <EmployeeContainer {...routerProps} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
