import React, { Component } from "react";

const Employees = props => {
  console.log(props.employees);

  const getEmployees = () => {
    return props.employees.map(employee => (
      <ul>
        <div>Employee ID#: {employee.id}</div>
        <div>Employee Name: {employee.employeename}</div>
        <div>
          Company: {employee.company.companyname}
          <div>Manager: {employee.manager.managername}</div>
        </div>
      </ul>
    ));
  };

  return (
    <div>
      <ul>{getEmployees()}</ul>
    </div>
  );
};

export default Employees;
