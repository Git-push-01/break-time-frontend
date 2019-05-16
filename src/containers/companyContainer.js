import React, { Component } from "react";
import { connect } from "react-redux";
 import Companies from "../components/companies";
import { bindActionCreators } from "redux";
import { fetchCompanies } from "../redux/actions/companyActions";
import { fetchUser } from "../redux/actions/userActions"
import { Container, Col } from "react-bootstrap";

import CompaniesForm from "../components/companiesForm";
import logo from "../images/logo.png";


class CompanyContainer extends Component {
  componentDidMount() {
    this.props.fetchCompanies();
    this.props.fetchUser()

  }

  render() {
    return (
      <div className="row">
      <img src={logo} alt="Logo" />
      <span>  Current User: {this.props.user.name}</span>
      <span>
          <a href="/profileContainer" className="btn btn-info" role="button">
            Back to Profile
          </a>
        </span>
        <span  className="align-middle">

        Add Your Company:<CompaniesForm />
        </span>
        <Container>
        <Col>
        <Companies companies={this.props.companies} user={this.props.user} />
        </Col>
        </Container>

        </div>
    );
  }
}
// <p > Company List:</p>
// <Companies companies={this.props.companies} user={this.props.user} />

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
