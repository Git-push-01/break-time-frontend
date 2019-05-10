
import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";


class Managers extends Component {

  render() {
    console.log(this.props, "props");



    const managerList = this.props.managers.map(manager => manager.managername)





    return (
<ListGroup variant="flush">


<ListGroup.Item>{managerList.map((managernames, index) => {
   return<p key={index}> {managernames}</p>}
)}</ListGroup.Item>

</ListGroup>

    );
  }
}

export default Managers;
