import React, { Component } from "react";

import BreakContainer from "../containers/breakContainer";
import CompanyContainer from "../containers/companyContainer";
import ManagerContainer from "../containers/managerContainer";
import EmployeeContainer from "../containers/employeeContainer";
import logo from "../images/logo.png";
import { Card, Container, Row, Col } from "react-bootstrap";
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
          <a href="/logout" className="btn btn-info" role="button">
            Log Out
          </a>
        </span>
        <span>

          <p>Current User: {this.props.user.email} User id#:{this.props.user.id}</p>
        </span>
        <span />
        <span />
        <span>

          <Container >
            <Card style={{ background:'#31e89f', opacity:"0.7"}} >
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
          <Container

          >
            <Card  style={{ background:'#31c6e8', opacity:"0.7"}}>
              <Card.Body>
                <Col>
                  <EmployeeContainer />
                </Col>
              </Card.Body>
            </Card>
          </Container>
        </span>
        <Container
          style={{
            display: "flex",
            flexDirection: "wrap",
            justifyContent: "space-evenly"
          }}
        >
          <BreakContainer />
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
