import { combineReducers } from 'redux'

import userReducer from './userReducer'
import companiesReducer from './companyReducer'
import employeesReducer from './employeeReducer'
import managersReducer from './managerReducer'

export default combineReducers({
  userReducer,
  companiesReducer,
  employeesReducer,
  managersReducer
})
