import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";

class Signup extends Component {
  state = {
    user: {
      name: "",
      email: "",
      password: "",
      redirect: false
    }
  };

  handleChange = e => {
    const newUser = {
      ...this.state.user,
      [e.target.name]: e.target.value
    };
    this.setState({
      user: newUser
    });
  };

  handleSubmit = (e, obj) => {
    e.preventDefault();
    console.log("yo", e.target, obj);
    this.signup(
      this.state.user.name,
      this.state.user.email,
      this.state.user.password
    );
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
  };

  componentDidMount() {}

  signup = (name, email, password, tester) => {
    const URL = "http://localhost:3001/auth/register";
    if (password) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          user: {
            name: name,
            email: email,
            password: password
          }
        })
      })
        .then(res => res.json())
        .then(this.props.history.push("/login"));
    } else {
      alert("Invalid Password"); // render something less anooying than alert
    }
  };

  logout = () => {
    localStorage.removeItem("jwt");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Form onSubmit={e => this.handleSubmit(e, this.state)}>
          <Form.Label> Break-Time </Form.Label>

          <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="name"
              id="name"
              type="text"
              value={this.state.user.name}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name="email"
              id="email"
              type="text"
              value={this.state.user.email}
              placeholder=" Enter Email"
            />
          </Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Group >
            <Form.Control
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              value={this.state.user.password}
              type="password"
              placeholder=" Enter Password"
            />
          </Form.Group>
          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>

        <div>
          {this.renderRedirect()}
          <Button onClick={this.setRedirect} variant="light">
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
