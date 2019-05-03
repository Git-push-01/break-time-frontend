import React, { Component } from "react";

import { connect } from "react-redux";

import Employees from "../components/employees";
import { bindActionCreators } from "redux"
import { fetchEmployees } from "../redux/actions/employeeActions";
import { fetchUser } from "../redux//actions/userActions";
import { fetchCompanies } from  "../redux/actions/companyActions"


class EmployeeContainer extends Component {


  componentWillMount() {
    this.props.fetchEmployees();
    this.props.fetchUser();
    this.props.fetchCompanies()
  }

  render() {
    console.log(this.props);
    const { user, employees } = this.props;
    return (
      <div>
      Employees List:
      <a href="/profileContainer" className="btn btn-info" role="button">
      Profile

      </a>








      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "company state");
  return {
    companies: state.companies,
    user: state.user,
    employees: state.employees
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUser,

      fetchEmployees,
      fetchCompanies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeContainer);
