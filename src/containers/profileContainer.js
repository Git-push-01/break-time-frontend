import React, { Component } from "react";
import BreakContainer from "../containers/breakContainer";
import CompanyContainer from "../containers/companyContainer";
import ManagerContainer from "../containers/managerContainer";
import EmployeeContainer from "../containers/employeeContainer";
import logo from "../images/logo.png";
import { Container } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/userActions";

class ProfileContainer extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(this.props, "ProfileContainer Props");

    return (
      <div style={{ display: "inline-block" }}>
        <img src={logo} alt="Logo" />

        <span>
          <a href="/companiesForm" className="btn btn-info" role="button">
            Add Company
          </a>
        </span>

        <span>
          <a href="/managersForm" className="btn btn-info" role="button">
            Add Manager
          </a>
        </span>

        <span>
          <a href="/employeesForm" className="btn btn-info" role="button">
            Add Employee
          </a>
        </span>
        <span>
          <a href="/breaksForm" className="btn btn-info" role="button">
            Add Break
          </a>
        </span>
        <span>
          <a
            href="/logout"
            className="btn btn-info"
            role="button"
            position="absolute"
          >
            Log Out
          </a>
        </span>
        <span>
          <ul
            style={{
              background: "#31e89f",
              opacity: "0.7",
              borderRadius: "5px"
            }}
          >
            Current User: {this.props.user.name} <br /> User id:{" "}
            {this.props.user.id}
          </ul>

          <ul
            style={{
              background: "#31e8e8",
              opacity: "0.7",
              borderRadius: "5px"
            }}
          >
            <CompanyContainer />
          </ul>

          <ul
            style={{
              background: "#31c6e8",
              opacity: "0.7",
              borderRadius: "5px"
            }}
          >
            <ManagerContainer />
          </ul>
        </span>

        <EmployeeContainer />

        <Container
          style={{ position: "relative", left: "105px", top: "-10px" }}
        >
          <BreakContainer />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.current
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
