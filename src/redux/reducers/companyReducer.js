const initialState = {
  current: {},
  all: []
}

export default function companiesReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_COMPANIES':
      return { ...state, all: action.payload }
    case 'CREATE_COMPANY':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_COMPANY':
      return { ...state, all: state.all.filter(company => company.id !== action.payload.id) }



    default: return state
  }
}
