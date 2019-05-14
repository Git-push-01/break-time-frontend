import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";
import Form from "react-bootstrap/Form";
import logo from "../images/logo.png"

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const field = e.target.name;
    let state = this.state;

    state[field] = e.target.value;
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = this.state;
    this.props.signupUser(user, () => this.props.history.push("/login"));
  }

  render() {
    const { name, email, password, password_confirmation } = this.state
    console.log(this.state);
    return (
      <div>

        <Form className="signup" onSubmit={this.onSubmit}>
          <Form.Label> <img src={logo} alt="Logo" /></Form.Label>

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              size="sm"
              onChange={this.onChange}
              name="name"
              id="name"
              type="text"
              value={ name }
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="sm"
              onChange={this.onChange}
              name="email"
              id="email"
              type="text"
              value={ email }
              placeholder=" Enter Email"
            />
          </Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Group>
            <Form.Control
              size="sm"
              onChange={this.onChange}
              name="password"
              id="password"
              type="text"
              value={ password }

              placeholder=" Enter Password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              size="sm"
              onChange={this.onChange}
              name="Password Confirmation"
              id="Password Confirmation"
              type="text"
              value={ password_confirmation }
              placeholder="Password Confirmation"
            />
          </Form.Group>
          <Button className="submit-btn" role="button" type="submit">
            Submit
          </Button>
          <a href="/login" className="btn btn-info" role="button">Log In</a>
        </Form>




      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signupUser
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Signup)
);
