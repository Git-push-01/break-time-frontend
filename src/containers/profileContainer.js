import React, { Component } from "react";

import BreakContainer from "../containers/breakContainer";
import CompanyContainer from "../containers/companyContainer";
import ManagerContainer from "../containers/managerContainer";
import EmployeeContainer from "../containers/employeeContainer";
import logo from "../images/logo.png";
import { Card, Container, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/userActions";


class ProfileContainer extends Component {
  componentWillMount() {

    this.props.fetchUser();
  }

  render() {
    console.log(this.props, "ProfileContainer Props");

    return (

      <div className="row">
        <img src={logo} alt="Logo" />


        <span>
          <a href="/companiesForm" className="btn btn-info" role="button">
            Add Company
          </a>
        </span>

        <span>
          <a href="/managersForm" className="btn btn-info" role="button">
            Add Manager
          </a>
        </span>

        <span>
          <a href="/employeesForm" className="btn btn-info" role="button">
            Add Employee
          </a>
        </span>
        <span>
          <a href="/breaksForm" className="btn btn-info" role="button">
            Add Break
          </a>
        </span>
        <span>
          <a href="/logout" className="btn btn-info" role="button" position="absolute">
            Log Out
          </a>
        </span>
        <span>

        <p style={{ background: "#31e89f", opacity: "0.7" }}>Current User: {this.props.user.email} User id#:{this.props.user.name}</p>
        </span>
        <span />
        <span />
        <span>

          <Container >
            <Card style={{ background:'#31e89f', opacity:"0.7", left: "225px", bottom: "0px"}} >
              <Card.Body>
                <Col>
                  <CompanyContainer />

                  <ManagerContainer />
                </Col>
              </Card.Body>
            </Card>
          </Container>
        </span>
        <span>


          <EmployeeContainer />

        </span>
        <Container style={{ position: "relative", left:"120px"}}>

          <BreakContainer  />
          </Container>

      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.current
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
