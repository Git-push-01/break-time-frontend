const baseUrl = 'http://localhost:3001/api/v1'

export const fetchManagers = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/managers`, data)
      .then(response => response.json())
      .then(managers => dispatch({
          type: 'FETCH_MANAGERS',
          payload: managers
      }))
      .catch(err => err)
  }
}
export const createManager = manager => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ manager })
  }

  return dispatch => {
    fetch(`${ baseUrl }/managers`, data)
      .then(response => response.json())
      .then(managers => dispatch({
        type: 'CREATE_MANAGER',
        payload: managers
      }))
      .catch(err => err)
  }
}

export const deleteManager = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/managers/${ id }`, data)
      .then(response => response.json())
      .then(managers => dispatch({
        type: 'DELETE_MANAGER',
        payload: managers
      }))
      .catch(err => err)
  }
}
