import React, { Component } from "react";
import axios from "axios";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/employees.json")
      .then(response => {
        console.log(response);
        this.setState({
          employee: response.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.employee);
    return (
      <div className="employee-card">
        {this.state.employee.map(employee => {
          return (
            <div className="employee-list" key={employee.id}>
              <h4>{employee.employeename}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Employees;
