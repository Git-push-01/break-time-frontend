const initialState = {
  current: {},
  companies: []
}

export default function companiesReducer(state = initialState, action) {
  console.log("in company reducer", state);
  switch(action.type) {
    case 'FETCH_COMPANIES':
      return { ...state, companiesReducer: action.payload }
    case 'CREATE_COMPANY':
      return { ...state, companiesReducer: [...state.companiesReducer, action.payload] }
    case 'DELETE_COMPANY':
      return { ...state, companiesReducer: state.companiesReducer.filter(company => company.id !== action.payload.id) }



    default: return state
  }
}
