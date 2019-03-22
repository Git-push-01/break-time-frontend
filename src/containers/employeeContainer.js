import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Companies from "../components/companies";
import Managers from "../components/managers";
import Employees from "../components/employees";
import Breaks from "../components/breaks";
import axios from "axios";

class EmployeeContainer extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/employees").then(res => {
      const employees = res.data;
      this.setState({ employees });
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Employees employees={this.state.employees} />

        <Breaks />
        <Companies />
      </div>
    );
  }
}

export default withRouter(EmployeeContainer);
