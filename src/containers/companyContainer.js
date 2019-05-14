import React, { Component } from "react";
import { connect } from "react-redux";
import Companies from "../components/companies";
import { bindActionCreators } from "redux";
import { fetchCompanies } from "../redux/actions/companyActions";
import { fetchUser } from "../redux/actions/userActions"
import CompaniesForm from "../components/companiesForm"
import logo from "../images/logo.png"

class CompanyContainer extends Component {




  componentDidMount() {
    this.props.fetchCompanies();
    this.props.fetchUser();
  }




  render() {



    return (

      <div>


        <img src={logo} alt="Logo" />

        <p > Company List:</p>
        <a href="/profileContainer" className="btn btn-info" role="button">
           Back to Profile
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
