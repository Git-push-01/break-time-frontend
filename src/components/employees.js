import React, { Component } from "react";
import { Container } from "react-bootstrap";





class Employees extends Component {

  render() {
    console.log(this.props, "props");

    const employeesList = this.props.employees.map(employee => employee.employeename);





    return (

      <Container>

{employeesList.map((employeenames, index) => {
   return<p key={index}> {employeenames}</p>}
)}
</Container>








    );
  }
}

export default Employees;
