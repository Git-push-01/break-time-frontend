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
  
}



export default App
