import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEmployees } from "../redux/actions/employeeActions";
import { fetchUser } from "../redux/actions/userActions"
import Employees from "../components/employees";
import BreakForm from "../components/breaksForm"
import EmployeesForm from "../components/employeesForm"
import logo from "../images/logo.png"
import { Container, Row, Col } from "react-bootstrap";


class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
    this.props.fetchUser()

  }

  render() {
    console.log(this.props);

    return (
      <div className="row">
      <img src={logo} alt="Logo" />
      <span>  Current User: {this.props.user.name}</span>
      <span>
      <a href="/profileContainer" className="btn btn-info" role="button">
           Back to Profile
        </a>
        </span>

        <Container>
        <Col>


        <Employees employees={this.props.employees}/>
        </Col>
        Add Your Employee:<EmployeesForm />
        Add Your Break: <BreakForm/>
        </Container>

      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state, "company state");
  return {
    employees: state.employeesReducer.employees,
    user: state.userReducer.current
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchEmployees,
      fetchUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeContainer);
