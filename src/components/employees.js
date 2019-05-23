import React, { Component } from "react";
import { Container } from "react-bootstrap";





class Employees extends Component {

  render() {
    console.log(this.props, "props");

    const employeesList = this.props.employees.map(employee => employee);





    return (

      <Container className="sidenav">

{employeesList.map((employeenames, index) => {
   return<p  key={index}>  Employee Name: {employeenames.employeename} | Employee id#: {employeenames.id}</p>}
)}
</Container>








    );
  }
}

export default Employees;
