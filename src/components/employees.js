import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";





class Employees extends Component {

  render() {
    console.log(this.props, " employee props");

    const employeesList = this.props.employees.map(employee => employee);





    return (

      <Container className="sidenav">

{employeesList.map((employeenames, index) => {
   return<ol  key={employeenames.id} style={{padding: "5px"}}><Button onClick={() => this.props.deleteEmployee(employeenames.id)}>  DELETE </Button>  <br></br> Employee Name: {employeenames.employeename} <br></br> Employee id: {employeenames.id} </ol>

})}
</Container>








    );
  }
}

export default Employees;
