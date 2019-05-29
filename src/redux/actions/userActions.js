const baseUrl = 'https://break-time-api.herokuapp.com'

export const loginUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }

  return dispatch => {
    fetch(`${ baseUrl }/login`, data)
      .then((response) => {
    if(!response.ok) throw new Error(response.status);
    else return response.json();
  })
      .then(user => {
        sessionStorage.setItem('jwt', user.jwt)

        dispatch({
          type: 'SET_USER',
          payload: user.current
        })

        callback()
      })
      .catch((error) => alert('Invalid Email or Password'));


  }
}

export const signupUser = (user, callback) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }

  return dispatch => {
    fetch(`${ baseUrl }/signup`, data)
      .then(response => response.json())
      .then(user => {
        sessionStorage.setItem('jwt', user.jwt)

        dispatch({
          type: 'SET_USER',
          payload: user.current
        })

        callback()
      })
      .catch(err => err)
  }
}

export const fetchUser = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/user`, data)
      .then(response => response.json())
      .then(users => {
        dispatch({
          type: 'SET_USER',
          payload: users
        })
      })
      .catch(err => err)
  }
}

export const deleteUser = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/users/${ id }`, data)
      .then(response => response.json())
      .then(user => dispatch({
        type: 'DELETE_USER',
        payload: user
      }))
      .catch(err => err)
  }
}
