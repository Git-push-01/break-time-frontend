import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BreakContainer from "../containers/breakContainer";
import logo from "../images/logo.png"
import { Container, Row, Col } from "react-bootstrap";


class ProfileContainer extends Component {
  render() {
    return (

      <div className="row">
        <img src={logo} alt="Logo" />
        <span>

        <a href="/companyContainer" className="btn btn-info" role="button">
          Company View
        </a>
        </span>

        <span>


        <a href="/managerContainer" className="btn btn-info" role="button">
            Manager View
          </a>
          </span>


          <span>
          <a href="/employeeContainer" className="btn btn-info" role="button">
            Employee View
          </a>
          </span>
          <span>
        <a href="/logout" className="btn btn-info" role="button">
          Log Out
        </a>
        </span>
        <span className="align-center">
         </span>
         <Container>
         <Row>

         <BreakContainer />
         </Row>
         </Container>

        </div>







    );
  }
}


export default withRouter(ProfileContainer);
