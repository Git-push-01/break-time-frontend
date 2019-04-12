import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Signup from "./components/signup";
import Login from "./components/login";

import ProfileContainer from "./containers/profileContainer"
const loggedIn = () => !!sessionStorage['jwt']

const logout = () => {
  if(sessionStorage['jwt']) sessionStorage.removeItem('jwt')

  return <Redirect to="/login"/>
}

export default (
  <Router>
    <div>

      <Switch>
        <Route path="/signup" component={Signup} signup={loggedIn()} />
        <Route path="/login" component={Login} signup={loggedIn()}/>
        <Route path="/profileContainer" component={ProfileContainer} signup={loggedIn()}/>
        <Route path='/logout' component={ () => logout() }/>
        


      </Switch>
    </div>
  </Router>
)
