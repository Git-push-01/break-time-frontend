const initialState = {
  current: {},
  all: []
}

export default function breakReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_BREAKS':
      return { ...state, all: action.payload }
    case 'CREATE_BREAK':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_BREAK':
      return { ...state, all: state.all.filter(break => break.id !== action.payload.id) }



    default: return state
  }
}
