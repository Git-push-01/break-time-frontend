import React, {Component} from 'react';
import { ListGroupItem } from "react-bootstrap";
import CompanyContainer from "../containers/companyContainer";
import { connect } from "react-redux";

class Companies extends Component {

  render() {
    console.log(this.props, "oh shit");
    return (
      <div>
        shit
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "state in companies");
  return {
    companies: state.companies
  };
}

export default connect(mapStateToProps)(Companies);
