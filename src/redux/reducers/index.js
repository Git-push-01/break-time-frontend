import { combineReducers } from 'redux'

import userReducer from './userReducer'
import companyReducer from './companyReducer'


const rootReducer = combineReducers({
  user: userReducer,
  company: companyReducer

})

export default rootReducer
