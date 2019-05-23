import React, { Component } from "react";


class Managers extends Component {
  render() {
    console.log(this.props, "props");

    const managerList = this.props.managers.map(manager => manager);

    return (
      <div>
        {managerList.map((managernames, index) => {
          return (
            <p  key={index}>

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
