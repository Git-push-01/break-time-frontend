import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createManager } from '../redux/actions/managerActions'

class Manager extends Component {
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
      <form onSubmit={ this.onSubmit }>
        <input name="managername" placeholder="Manager Name" value={ managername } onChange={ this.onChange }/>
        <input name="user_id" placeholder="User Id" value={ user_id } onChange={ this.onChange }/>
        <input name="company_id" placeholder="Company Id" value={ company_id } onChange={ this.onChange }/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createManager
}, dispatch)

export default connect(null, mapDispatchToProps)(Manager)
