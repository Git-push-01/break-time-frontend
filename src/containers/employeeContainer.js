import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchEmployees,
  deleteEmployee
} from "../redux/actions/employeeActions";

import Employees from "../components/employees";

class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <Employees
          employees={this.props.employees}
          deleteEmployee={this.props.deleteEmployee}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "company state");
  return {
    employees: state.employeesReducer.employees
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchEmployees,
      deleteEmployee
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeContainer);
