import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchManagers } from "../redux/actions/managerActions";

import Managers from "../components/managers";



class ManagerContainer extends Component {
  componentDidMount() {
    this.props.fetchManagers();

  }

  render() {
    console.log(this.props);

    return (
      <div>

            <Managers managers={this.props.managers} />

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "company state");
  return {
    managers: state.managersReducer.managers,

  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchManagers,

    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerContainer);
