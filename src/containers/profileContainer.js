import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Companies from "../components/companies";
import Managers from "../components/managers";
import Employees from "../components/employees";
import Breaks from "../components/breaks";

class ProfileContainer extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        Manager: <Managers />
        Employees: <Employees />
        <Breaks />
        Company: <Companies />
        <a href="/signup" className="btn btn-info" role="button">
          Log Out
        </a>
      </div>
    );
  }
}

export default withRouter(ProfileContainer);
