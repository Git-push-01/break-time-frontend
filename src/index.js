import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./App";
import { combineReducers } from "redux";

import userReducer from "./redux/reducers/userReducer";
import companiesReducer from "./redux/reducers/companyReducer";
import employeesReducer from "./redux/reducers/employeeReducer";
import managersReducer from "./redux/reducers/managerReducer";
import breaksReducer from "./redux/reducers/breakReducer";

const rootReducer = combineReducers({
  userReducer,
  companiesReducer,
  employeesReducer,
  managersReducer,
  breaksReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
