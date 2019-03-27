import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    console.log(e.target.name);
  };

  login = obj => {
    fetch("http://localhost:3001/auth/login", {

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
        <Form>
          <Form.Group onSubmit={e => this.handleSubmit(e, this.state)}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="email"
              id="email"
              type="text"
              value={this.state.auth.email}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="password"
              id="password"
              type="password"
              value={this.state.auth.password}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="light" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
