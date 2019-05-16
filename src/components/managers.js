
import React, { Component } from "react";
import { Container } from "react-bootstrap";


class Managers extends Component {

  render() {
    console.log(this.props, "props");



    const managerList = this.props.managers.map(manager => manager.managername)





    return (
<Container>


{managerList.map((managernames, index) => {
   return<p key={index}> {managernames}</p>}
)}

</Container>

    );
  }
}

export default Managers;
