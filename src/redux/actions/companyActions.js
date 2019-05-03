const baseUrl = 'http://localhost:3001/api/v1'

export const fetchCompanies = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/companies`, data)
      .then(response => response.json())
      .then(companies => dispatch({
          type: 'FETCH_COMPANIES',
          payload: companies
      }))
      .catch(err => err)
  }
}
export const createCompany = company => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ company })
  }

  return dispatch => {
    fetch(`${ baseUrl }/companies`, data)
      .then(response => response.json())
      .then(companies => dispatch({
        type: 'CREATE_COMPANY',
        payload: companies
      }))
      .catch(err => err)
  }
}

export const deleteCompany = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/companies/${ id }`, data)
      .then(response => response.json())
      .then(company => dispatch({
        type: 'DELETE_COMPANY',
        payload: company
      }))
      .catch(err => err)
  }
}
