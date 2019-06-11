import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Managers extends Component {
  render() {
    console.log(this.props, "props");

    const managerList = this.props.managers.map(manager => manager);

    return (
      <div>
        {managerList.map((managernames, index) => {
          return (
            <p key={index}>
              Manager Name: {managernames.managername} <br /> Managers id#:
              {managernames.id}
              <br />
              <Button onClick={() => this.props.deleteManager(managernames.id)}>
                {" "}
                DELETE{" "}
              </Button>
            </p>
          );
        })}
      </div>
    );
  }
}

export default Managers;
