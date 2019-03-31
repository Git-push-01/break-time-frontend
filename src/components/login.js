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
    console.log(this.state.auth);

    this.login(obj);
  };


  login = loginParams => {
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(loginParams)
    })
      .then(res => res.json())
      .then(user => console.log(user));
  };

  render() {
    console.log(this.state.errors);
    return (
      <div>
        <Form
          className="login"
          onSubmit={e => this.handleSubmit(e, this.state)}
        >
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
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
          <Button className="submit-btn" variant="light" type="submit">
            Log In
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
