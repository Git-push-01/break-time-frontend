import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Companies from "../components/companies";
import Managers from "../components/managers";
import Employees from "../components/employees";
import Breaks from "../components/breaks";



class ProfileContainer extends Component {

  render() {




    return (
      <div>
      <h1>
      WOW
      <Managers  />
      <Employees  />
      <Breaks />
      <Companies />
      </h1>




      </div>
    );
  }
}

export default withRouter(ProfileContainer);
