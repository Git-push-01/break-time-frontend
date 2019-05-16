import React, { Component } from "react";
import { connect } from "react-redux";
import Breaks from "../components/breaks";
import { bindActionCreators } from "redux";
import { fetchBreaks } from "../redux/actions/breakActions";
import { fetchUser } from "../redux/actions/userActions";
// import logo from "../images/logo.png"

class BreakContainer extends Component {
  componentDidMount() {
    this.props.fetchBreaks();
    this.props.fetchUser();
  }

  render() {
    console.log(this.props, "container User");


    return(
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5 + "px"
      }}>
       <Breaks breaks={this.props.breaks} user={this.props.user} />
       </div>
     )
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    breaks: state.breaksReducer.breaks,
    user: state.userReducer.current
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBreaks,
      fetchUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakContainer);
