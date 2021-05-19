import React from "react";
import dialogPageReducer from "./dialog-reducer";
import profilePageReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userPageReducer from "./userPageReducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogPageReducer,
   sidebar: sidebarReducer,
   userPage: userPageReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;