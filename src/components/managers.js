import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Managers extends Component {
  render() {
    console.log(this.props, "props");

    const managerList = this.props.managers.map(manager => manager);

    return (
      <div>
        {managerList.map((managernames, index) => {
          return (
            <p key={index}>

              Manager Name: {managernames.managername} | Managers id#:
              {managernames.id}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Managers;
