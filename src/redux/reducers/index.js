import { combineReducers } from 'redux'

import userReducer from './userReducer'
import companiesReducer from './companyReducer'
import employeesReducer from './employeeReducer'

export default combineReducers({
  userReducer,
  companiesReducer,
  employeesReducer
})
