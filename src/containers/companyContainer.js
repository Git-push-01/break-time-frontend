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
    this.props.fetchUser();
    this.props.fetchCompanies();
    this.props.fetchManagers();
    this.props.fetchEmployees();
  }


  render() {

    console.log(this.props, "props");
    const { user, companies, managers, employees } = this.props;

    return (
      <div>
        <h1> Company List:</h1>
        <a href="/profileContainer" className="btn btn-info" role="button">
          Profile
        </a>
        <Companies />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "company state");
  return {
    combineReducers: state.combineReducers
    // user: state.user,
    // companies: state.companies,
    // employees: state.employees,
    // managers: state.managers

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
