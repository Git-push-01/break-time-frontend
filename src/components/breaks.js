import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
// import BreakForm from "../components/breaksForm"



class Breaks extends Component {

  render() {
    console.log(this.props, "props");

    const breaksList = this.props.breaks.map(breaks => breaks.breakdate);





    return (
<ListGroup variant="flush">
<ListGroup.Item>{breaksList.map((breakdate, index) => {
   return<p key={index}> {breakdate}</p>}
)}</ListGroup.Item>









</ListGroup>

    );
  }
}

export default Breaks;
