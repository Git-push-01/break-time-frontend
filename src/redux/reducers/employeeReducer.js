const initialState = {

  employees: []
}

export default function employeesReducer(state = initialState, action) {
  console.log("in employees reducer", state);
  switch(action.type) {
    case 'FETCH_EMPLOYEES':
      return { ...state, employees: action.payload }
    case 'CREATE_EMPLOYEE':
      return { ...state, employees: [...state.employees, action.payload] }
    case 'DELETE_EMPLOYEE':
      return { ...state, employees: state.employees.filter(employee => employee.id !== action.payload.id) }



    default: return state
  }
}
