import React, { Component } from 'react';

import './App.css';
import Companies from './components/companies'
import Managers from './components/managers'
import Employees from './components/employees'
import Breaks from './components/breaks'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Break-Time</h1>
        </header>
        <Companies />
        <Managers />
        <Employees />
        <Breaks />
      </div>
    );
  }
}

export default App;
