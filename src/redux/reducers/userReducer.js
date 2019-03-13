const initialState = {
  currentUser: {
    user: {},
    jwt: ""
  },
  users: []

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER": {
      return { ...state, currentUser: action.getUser };
    }
    case "GET_USERS": {
      return { ...state, users: action.payload };
    }
    default:
          return state;
      }
    };
    export default userReducer;