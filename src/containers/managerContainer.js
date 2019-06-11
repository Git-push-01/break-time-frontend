import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchManagers, deleteManager } from "../redux/actions/managerActions";

import Managers from "../components/managers";

class ManagerContainer extends Component {
  componentDidMount() {
    this.props.fetchManagers();
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <Managers
          managers={this.props.managers}
          deleteManager={this.props.deleteManager}
        />
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
      fetchManagers,
      deleteManager
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerContainer);
