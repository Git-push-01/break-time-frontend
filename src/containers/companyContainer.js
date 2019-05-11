import React, { Component } from "react";
import { connect } from "react-redux";
import Companies from "../components/companies";
import { bindActionCreators } from "redux";
import { fetchCompanies } from "../redux/actions/companyActions";
import { fetchUser } from "../redux/actions/userActions"
import CompaniesForm from "../components/companiesForm"

class CompanyContainer extends Component {
  componentDidMount() {
    this.props.fetchCompanies();
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <h3> Company List:</h3>
        <a href="/profileContainer" className="btn btn-info" role="button">
          Profile
        </a>

        <Companies companies={this.props.companies} user={this.props.user} />
        Add Your Company: <CompaniesForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    companies: state.companiesReducer.companies,
    user: state.userReducer.current
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCompanies,
      fetchUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
