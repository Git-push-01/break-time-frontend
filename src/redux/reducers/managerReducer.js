const initialState = {
  managers: []
}

export default function managersReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_MANAGERS':
      return { ...state, managers: action.payload }
    case 'CREATE_MANAGER':
      return { ...state, managers: [...state.managers, action.payload] }
    case 'DELETE_MANAGER':
      return { ...state, managers: state.managers.filter(manager => manager.id !== action.payload.id) }



    default: return state
  }
}
