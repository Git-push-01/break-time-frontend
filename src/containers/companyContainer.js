import React, { Component } from "react";
import { connect } from "react-redux";
import Companies from "../components/companies";
import { bindActionCreators } from "redux";
import { fetchCompanies } from "../redux/actions/companyActions";
import CompaniesForm from "../components/companiesForm"

class CompanyContainer extends Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    return (
      <div>
        <h3> Company List:</h3>
        <a href="/profileContainer" className="btn btn-info" role="button">
          Profile
        </a>

        <Companies companies={this.props.companies} />
        Add Your Company: <CompaniesForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    companies: state.companiesReducer.companies
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCompanies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
