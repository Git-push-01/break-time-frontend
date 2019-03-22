import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class Login extends Component {
  state = {
    errors: false,
    auth: { email: "", password: "" }
  };

  handleChange = e => {
    this.setState({
      auth: { ...this.state.auth, [e.target.name]: e.target.value }
    });
  };
  handleSubmit = (e, obj) => {
    e.preventDefault();
    console.log(this.state);
  };

  login = obj => {
    axios
      .post("http://localhost:3001/auth/login", {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          auth: {
            email: obj.auth.email,
            password: obj.auth.password
          }
        })
      })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          this.setState({ errors: true });
        } else {
          console.log(user);
          localStorage.setItem("jwt", user.jwt);
          if (user.jwt) {
            this.props.history.push(`/managerContainer`);
          }
          if (user.jwt) {
            this.props.history.push(`/employeeContainer`);
          }
        }
      });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1 style={{ marginTop: "20vh", marginBottom: "5vh" }} />
        <form onSubmit={e => this.handleSubmit(e, this.state)}>
          <br />
          <label htmlFor="email"> E-mail: </label>
          <br />
          <input
            onChange={this.handleChange}
            name="email"
            id="email"
            type="text"
            value={this.state.auth.email}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            onChange={this.handleChange}
            name="password"
            id="password"
            type="text"
            value={this.state.auth.password}
          />
          <br />
          <input type="submit" name="Submit" />
        </form>
        <br />
      </div>
    );
  }
}

export default withRouter(Login);
