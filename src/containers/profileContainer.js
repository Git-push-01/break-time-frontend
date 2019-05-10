import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BreakForm from "../components/breaksForm";
import BreakContainer from "../containers/breakContainer";

class ProfileContainer extends Component {
  render() {
    return (
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
        <br />
          <a href="/signup" className="btn btn-info" role="button">
            Log Out
          </a>
        </div>
        <div>
        <BreakContainer />
        </div>
        <div>
        Add your Break:
        <BreakForm />
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileContainer);
