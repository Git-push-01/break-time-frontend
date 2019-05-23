import React, { Component } from "react";
import { connect } from "react-redux";
import Breaks from "../components/breaks";
import { bindActionCreators } from "redux";
import { fetchBreaks, deleteBreak  } from "../redux/actions/breakActions";




class BreakContainer extends Component {




  componentWillMount() {

    this.props.fetchBreaks()


  }


  render() {
    console.log(this.props, "container User");


    return(
      <div>
       <Breaks breaks={this.props.breaks} deleteBreak={this.props.deleteBreak}  />
       </div>
     )
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    breaks: state.breaksReducer.breaks,
    





  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBreaks,
      deleteBreak



    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreakContainer);
