const baseUrl = 'https://break-time-api.herokuapp.com'

export const fetchEmployees = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/employees`, data)
      .then(response => response.json())
      .then(employees => dispatch({
          type: 'FETCH_EMPLOYEES',
          payload: employees
      }))
      .catch(err => err)
  }
}
export const createEmployee = employee => {
  console.log('C');
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    },
    body: JSON.stringify({ employee })
  }

  return dispatch => {
    fetch(`${ baseUrl }/employees`, data)
      .then(response => response.json())
      .then(employees =>{
        console.log('D');
         dispatch({
        type: 'CREATE_EMPLOYEE',
        payload: employees
      })})
      .catch(err => err)
  }
  console.log('E');
}

export const deleteEmployee = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.jwt
    }
  }

  return dispatch => {
    fetch(`${ baseUrl }/employees/${ id }`, data)
      .then(response => response.json())
      .then(employees => dispatch({
        type: 'DELETE_EMPLOYEE',
        payload: employees
      }))
      .catch(err => err)
  }
}
