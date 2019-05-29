const baseUrl = 'https://break-time-api.herokuapp.com'

// http://localhost:3001/api/v1
export const fetchBreaks = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/breaks`, data)
      .then(response => response.json())
      .then(breaks => dispatch({
          type: 'FETCH_BREAKS',
          payload: breaks
      }))
      .catch(err => err)
  }
}
export const createBreak = breaks => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ breaks })
  }

  return dispatch => {
    fetch(`${ baseUrl }/breaks`, data)
      .then(response => response.json())
      .then(breaks => dispatch({
        type: 'CREATE_BREAK',
        payload: breaks
      }))
      .catch(err => err)
  }
}

export const deleteBreak = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/breaks/${ id }`, data)
      .then(response => response.json())
      .then(breaks => dispatch({
        type: 'DELETE_BREAK',
        payload: breaks
        }))
      .catch(err => err)
    }
  }
