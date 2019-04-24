import React, { Component } from "react";
import { connect } from "react-redux";
import Companies from "../components/companies";
import { fetchCompanies } from "../redux/actions/companyActions";


class CompanyContainer extends Component {


  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    console.log(this.props.actions);
    const companyList = this.props.companies.map(company => {
      return <Companies key={company.id} company={company} dog='dog' />;
});
    return (

      <div>
        <h1> Company List:</h1>
        <div className="companyList">
          {companyList}
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state)  => {
  return {
     fetchCompanies: state.fetchCompanies
   };
}

const mapDispatchToProps = (dispatch) => {
  return {
     fetchCompanies: () => dispatch(fetchCompanies())
}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
