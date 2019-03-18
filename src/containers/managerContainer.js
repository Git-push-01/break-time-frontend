import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Companies from "../components/companies";
import Managers from "../components/managers";
import Employees from "../components/employees";
import Breaks from "../components/breaks";
import axios from "axios";

class ManagerContainer extends Component {
  state = {
    managers: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/managers").then(res => {
      const managers = res.data;
      this.setState({ managers });
    });
  }

  render() {
    console.log(this.state.managers);
    return (
      <div>
        <Managers managers={this.state.managers} />
        <Breaks />
      </div>
    );
  }
}

export default withRouter(ManagerContainer);
