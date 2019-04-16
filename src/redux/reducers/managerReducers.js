const initialState = {
  current: {},
  all: []
}

export default function managersReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_MANAGERS':
      return { ...state, all: action.payload }
    case 'CREATE_MANAGER':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_MANAGER':
      return { ...state, all: state.all.filter(company => company.id !== action.payload.id) }



    default: return state
  }
}
