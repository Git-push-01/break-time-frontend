import React, { Component } from "react";
import axios from "axios";

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/companies.json")
      .then(response => {
        console.log(response);
        this.setState({
          companies: response.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.companies);
    return (
      <div className="company-card">
        {this.state.companies.map(companies => {
          return (
            <div className="company-list" key={companies.id}>
              <h4>{companies.companyname}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Companies;
