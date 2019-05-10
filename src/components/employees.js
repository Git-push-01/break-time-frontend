import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";




class Employees extends Component {

  render() {
    console.log(this.props, "props");

    const employeesList = this.props.employees.map(employee => employee.employeename);





    return (
<ListGroup variant="flush">
<ListGroup.Item>{employeesList.map((employeenames, index) => {
   return<p key={index}> {employeenames}</p>}
)}</ListGroup.Item>






</ListGroup>

    );
  }
}

export default Employees;
