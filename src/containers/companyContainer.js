import React, { Component } from "react";
import { connect } from "react-redux";
import Companies from "../components/companies";
import { bindActionCreators } from "redux";
import { fetchCompanies } from "../redux/actions/companyActions";
import { fetchUser } from "../redux//actions/userActions";

class CompanyContainer extends Component {

  componentWillMount() {
    this.props.fetchUser();
    this.props.fetchCompanies();
  }

  render() {
    console.log(this.props, "props");
    const { user, companies } = this.props;

    return (
      <div>
        <h1> Company List:</h1>
        <Companies  companies={this.props} user={this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "company state");
  return {
    user: state.user,
    companies: state.companies
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUser,

      fetchCompanies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
