import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchManagers } from "../redux/actions/managerActions";
import { fetchUser } from "../redux/actions/userActions"
 import Managers from "../components/managers";
import ManagersForm from "../components/managersForm"
import logo from "../images/logo.png"
import { Container, Row, Col } from "react-bootstrap";


class ManagerContainer extends Component {
  componentDidMount() {
    this.props.fetchManagers();
    this.props.fetchUser()
  }

  render() {
    console.log(this.props);

    return (
      <div className="row">
      <img src={logo} alt="Logo" />
      <span>  Current User: {this.props.user.name}</span>
      <span>
      <a href="/profileContainer" className="btn btn-info" role="button">
         Back to Profile
      </a>
        </span>
        <span className="align-middle">

        Add Your Manager: <ManagersForm />
        </span>
        <Container>
        <Col>
        

        <Managers managers={this.props.managers} />
        </Col>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "company state");
  return {
    managers: state.managersReducer.managers,
    user: state.userReducer.current
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchManagers,
      fetchUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerContainer);
