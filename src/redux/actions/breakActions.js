const baseUrl = 'http://localhost:3001/api/v1'

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
      .then(breaktime => dispatch({
          type: 'FETCH_BREAK',
          payload: breaktime
      }))
      .catch(err => err)
  }
}
export const createBreak = breaktime => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ breaktime })
  }

  return dispatch => {
    fetch(`${ baseUrl }/breaks`, data)
      .then(response => response.json())
      .then(breaktime => dispatch({
        type: 'CREATE_BREAK',
        payload: breaktime
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
      .then(breaktime => dispatch({
        type: 'DELETE_BREAK',
        payload: breaktime
        }))
      .catch(err => err)
    }
  }
