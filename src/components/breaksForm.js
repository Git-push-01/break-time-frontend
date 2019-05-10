import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createBreak } from '../redux/actions/breakActions'




class BreakForm extends Component {



  constructor() {
    super()

    this.state = {
      breakdate: '',
      breaketime: '',
      user_id:'',
      employee_id:''
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

    this.props.createBreak(this.state)
    this.setState({
      breakdate: '',
      breaketime: '',
      user_id:'',
      employee_id:''
    })
  }


  render() {
    
    const { breakdate, breaketime, user_id, employee_id } = this.state

    return (
      <form onSubmit={ this.onSubmit }>
        <input name="breakdate" placeholder="Break Date" value={ breakdate } onChange={ this.onChange }/>
        <input name="breaketime" placeholder="Break Time" value={ breaketime } onChange={ this.onChange }/>
        <input name="user_id" placeholder="User Id" value={ user_id } onChange={ this.onChange }/>
        <input name="employee_id" placeholder="Employee Id" value={ employee_id } onChange={ this.onChange }/>
        <button type="submit">Add</button>
      </form>

    )
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  createBreak


}, dispatch)

export default connect(null, mapDispatchToProps)(BreakForm)
