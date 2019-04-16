const initialState = {
  current: {},
  all: []
}

export default function employeesReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_EMPLOYEES':
      return { ...state, all: action.payload }
    case 'CREATE_EMPLOYEE':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_EMPLOYEE':
      return { ...state, all: state.all.filter(company => company.id !== action.payload.id) }



    default: return state
  }
}
