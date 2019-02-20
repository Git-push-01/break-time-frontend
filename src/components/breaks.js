import React, { Component } from "react";
import axios from "axios";

class Breaks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breaks: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/v1/breaks.json")
      .then(response => {
        console.log(response);
        this.setState({
          breaks: response.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.breaks);
    return (
      <div className="break-card">
        {this.state.breaks.map(breaks => {
          return (
            <div className="break-list" key={breaks.id}>
              <h4>{breaks.breakdate}</h4>
              <h4>{breaks.breaktime}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Breaks;
