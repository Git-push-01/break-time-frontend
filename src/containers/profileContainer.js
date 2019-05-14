import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BreakForm from "../components/breaksForm";
import BreakContainer from "../containers/breakContainer";
import logo from "../images/logo.png"

class ProfileContainer extends Component {
  render() {
    return (

      <div>
        <img src={logo} alt="Logo" />
        <div>
        <div>

          <a href="/managerContainer" className="btn btn-info" role="button">
            Manager View
          </a>
        </div>
        <br />
        <div>
          <a href="/employeeContainer" className="btn btn-info" role="button">
            Employee View
          </a>
        </div>
        <br />
        <a href="/companyContainer" className="btn btn-info" role="button">
          Company View
        </a>
        <div>


        </div>

        <div>
        <br />
        <a href="/logout" className="btn btn-info" role="button">
          Log Out
        </a>
        <div>
        <BreakContainer />
        </div>

        </div>
        </div>

        

        </div>
    );
  }
}

export default withRouter(ProfileContainer);
