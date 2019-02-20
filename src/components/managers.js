import React, { Component } from "react";
import axios from "axios";

class Managers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managers: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/managers.json")
      .then(response => {
        console.log(response);
        this.setState({
          managers: response.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.managers);
    return (
      <div className="manager-card">
        {this.state.managers.map(managers => {
          return (
            <div className="manager-list" key={managers.id}>
              <h4>{managers.managername}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Managers;
