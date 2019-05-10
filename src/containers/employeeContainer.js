import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEmployees } from "../redux/actions/employeeActions";
import Employees from "../components/employees";
import BreakForm from "../components/breaksForm"
import EmployeesForm from "../components/employeesForm"


class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployees();

  }

  render() {
    console.log(this.props);

    return (
      <div>
        Employees List:
        <a href="/profileContainer" className="btn btn-info" role="button">
          Profile
        </a>
        <Employees employees={this.props.employees} />
        Add Your Employee: <EmployeesForm />
        Add your Break:
        <BreakForm />

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
      fetchEmployees
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeContainer);
