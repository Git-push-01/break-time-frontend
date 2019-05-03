import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginUser } from '../redux/actions/userActions'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()

    const user = this.state
    this.props.loginUser(user, () =>
      this.props.history.push('/ProfileContainer'))
    }




  render() {
    console.log(this.state);
    const { email, password } = this.state
    return (
      <div>
        <Form
          className="login"
          onSubmit={ this.onSubmit }
        >
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.onChange}
              name="email"
              id="email"
              type="text"
              value={ email }
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.onChange}
              name="password"
              id="password"
              type="password"
              value={ password }
              placeholder="Password"
            />
          </Form.Group>
          <Button className="submit-btn" role="button" type="submit">
            Log In
          </Button>
        </Form>
        <a href="/signup" className="btn btn-info" role="button" >Sign up</a>


      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(Login))
