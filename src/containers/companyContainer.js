import React, { Component } from "react";
import { connect } from "react-redux";
import Companies from "../components/companies";
import { bindActionCreators } from "redux";
import { fetchCompanies } from "../redux/actions/companyActions";
import { fetchUser } from "../redux/actions/userActions";
import { fetchManagers } from "../redux/actions/managerActions";
import { fetchEmployees } from "../redux/actions/employeeActions";

class CompanyContainer extends Component {
  componentWillMount() {
    this.props.fetchCompanies();
    this.props.fetchManagers();
    this.props.fetchEmployees();
    // this.props.fetchBreaks();
  }

  render() {
    return (
      <div>
        <h3> Company List:</h3>
        <a href="/profileContainer" className="btn btn-info" role="button">
          Profile
        </a>

        <Companies
          companies={this.props.companies}
          managers={this.props.managers}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    companies: state.companiesReducer.companies,
    managers: state.managersReducer.managers,
    employees: state.employeesReducer.employees
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUser,
      fetchCompanies,
      fetchManagers,
      fetchEmployees
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
