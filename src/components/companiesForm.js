import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createCompany } from '../redux/actions/companyActions'

class CompanyForm extends Component {
  constructor() {
    super()

    this.state = {
      companyname: '',
      user_id: ''
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

    this.props.createCompany(this.state)
    this.setState({
      companyname: '',
      user_id: ''
    })
  }

  render() {
    const { companyname, user_id } = this.state

    return (
      <form onSubmit={ this.onSubmit }>
        <input name="companyname" placeholder="Company Name" value={ companyname } onChange={ this.onChange }/>
        <input name="user_id" placeholder="User Id" value={ user_id } onChange={ this.onChange }/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createCompany
}, dispatch)

export default connect(null, mapDispatchToProps)(CompanyForm)
