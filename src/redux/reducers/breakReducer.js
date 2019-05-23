const initialState = {

  breaks: []
}

export default function breaksReducer(state = initialState, action) {
    console.log(action, "Break action");
  switch(action.type) {
    case 'FETCH_BREAKS':
      return { ...state, breaks: action.payload }
    case 'CREATE_BREAK':
      return { ...state, breaks: [...state.breaks, action.payload] }
    case 'DELETE_BREAK':
      return { ...state, breaks: state.breaks.filter(breaks => breaks.id !== action.payload.id) }
    default:
     return state
  }
}
