import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchManagers } from "../redux/actions/managerActions";
import Managers from "../components/managers";
import ManagersForm from "../components/managersForm"
import logo from "../images/logo.png"

class ManagerContainer extends Component {
  componentDidMount() {
    this.props.fetchManagers();
  }

  render() {
    console.log(this.props);

    return (
      <div>
      <div>
        <img src={logo} alt="Logo" />
        </div>
        Managers List:
        <a href="/profileContainer" className="btn btn-info" role="button">
          Profile
        </a>
        <Managers managers={this.props.managers} />
        Add Your Company: <ManagersForm />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "company state");
  return {
    managers: state.managersReducer.managers
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchManagers
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerContainer);
