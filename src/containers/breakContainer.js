import React, { Component } from "react";
import { connect } from "react-redux";
import Breaks from "../components/breaks";
import { bindActionCreators } from "redux";
import { fetchBreaks } from "../redux/actions/breakActions";




class BreakContainer extends Component {
  componentDidMount() {
    this.props.fetchBreaks();


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
       <Breaks breaks={this.props.breaks} />
       </div>
     )
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    breaks: state.breaksReducer.breaks



  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBreaks,



    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakContainer);
