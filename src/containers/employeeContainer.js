import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Companies from "../components/companies";
import Managers from "../components/managers";
import Employees from "../components/employees";
import Breaks from "../components/breaks";


class EmployeeContainer extends Component {

  render() {
    console.log(this.props);
    return (
      <div>



        < Companies />
        < Managers />
        < Employees />
        <Breaks />

      </div>
    );
  }
}

export default withRouter(EmployeeContainer);
