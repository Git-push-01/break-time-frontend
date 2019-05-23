import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import logo from "../images/logo.png"
import { createManager } from '../redux/actions/managerActions'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";

class ManagerForm extends Component {
  constructor() {
    super()

    this.state = {
      managername: '',
      user_id: '',
      company_id: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const field = e.target.name
    let state = this.state

    state[field] = e.target.value
    this.setState(state)
  }

  onSubmit(e) {
    e.preventDefault()

    this.props.createManager(this.state)
    this.setState({
      managername: '',
      user_id: '',
      company_id: ''

    })
  }

  render() {
    const { managername, user_id, company_id } = this.state

    return (
      <div>
      <img src={logo} alt="Logo" />
      <span>
      <a href="/ProfileContainer" className="btn btn-info" role="button">
        Back To Profile
      </a>
      </span>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Card
        style={{ background:'#31c6e8', opacity:"0.7"}}
        >
          <Card.Body>
      <Form onSubmit={ this.onSubmit }>
      <Form.Label>  Enter Managers Name </Form.Label>
        <Form.Control name="managername" placeholder="Manager Name" value={ managername } onChange={ this.onChange }/>
        <Form.Label>  Enter User id</Form.Label>
        <Form.Control name="user_id" placeholder="User Id" value={ user_id } onChange={ this.onChange }/>
        <Form.Label>  Enter Company id</Form.Label>
        <Form.Control name="company_id" placeholder="Company Id" value={ company_id } onChange={ this.onChange }/>
        <Button variant="primary" type="submit">Add</Button>
      </Form>
      </Card.Body>
      </Card>
      </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createManager
}, dispatch)

export default connect(null, mapDispatchToProps)(ManagerForm)
