import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createEmployee } from '../redux/actions/employeeActions'

class Employee extends Component {
  constructor() {
    super()

    this.state = {
      employeename: '',
      user_id: '',
      company_id: '',
      manager_id: ''
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

    this.props.createEmployee(this.state)
    this.setState({
      employeename: '',
      user_id: '',
      company_id: '',
      manager_id: ''
    })
  }

  render() {
    const { employeename, user_id, company_id, manager_id } = this.state

    return (
      <form onSubmit={ this.onSubmit }>
        <input name="employeename" placeholder="Employee Name" value={ employeename } onChange={ this.onChange }/>
        <input name="user_id" placeholder="User Id" value={ user_id } onChange={ this.onChange }/>
        <input name="company_id" placeholder="Company Id" value={ company_id } onChange={ this.onChange }/>
        <input name="manager_id" placeholder="Manager Id" value={ manager_id } onChange={ this.onChange }/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createEmployee
}, dispatch)

export default connect(null, mapDispatchToProps)(Employee)
