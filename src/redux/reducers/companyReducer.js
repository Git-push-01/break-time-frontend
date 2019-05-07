const initialState = {
  companies: []
}

export default function companiesReducer(state = initialState, action) {

  switch(action.type) {
    case 'FETCH_COMPANIES':
      return { ...state, companies: action.payload }
    case 'CREATE_COMPANY':
      return { ...state, companies: [...state.companies, action.payload] }
    case 'DELETE_COMPANY':
      return { ...state, companies: state.companies.filter(company => company.id !== action.payload.id) }



    default: return state
  }
}
