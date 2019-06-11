import React, { Component } from "react";
import { connect } from "react-redux";
import Companies from "../components/companies";
import { bindActionCreators } from "redux";
import { fetchCompanies } from "../redux/actions/companyActions";

class CompanyContainer extends Component {
  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    return (
      <div>
        <Companies companies={this.props.companies} />
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
