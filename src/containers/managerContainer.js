import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Companies from "../components/companies";
import Managers from "../components/managers";
import Employees from "../components/employees";
import Breaks from "../components/breaks";


class ManagerContainer extends Component {

  render() {
    console.log(this.props);



    return (
      <div>


        <Companies />
        <Managers  managerslist={this.props}/>

        <Employees  />

        </a>
        View breaks:
        <Breaks />

      </div>
    );
  }
}

export default withRouter(ManagerContainer);
