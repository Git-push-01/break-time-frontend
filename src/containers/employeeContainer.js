import React, { Component } from "react";

import { connect } from "react-redux";

import Employees from "../components/employees";
import { bindActionCreators } from "redux"
import { fetchEmployees } from "../redux/actions/employeeActions";
import { fetchUser } from "../redux//actions/userActions";


class EmployeeContainer extends Component {


  componentWillMount() {
    this.props.fetchEmployees();
    this.props.fetchUser();
  }

  render() {
    console.log(this.props);
    const { user, employees } = this.props;
    return (
      <div>
      Employees List:





        


      </div>
    );
  }
}


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUser,

      fetchEmployees
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(EmployeeContainer);
