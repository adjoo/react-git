import {createStore, combineReducers, applyMiddleware} from 'redux'
import profilePage from "./profile-reducer";
import dialogsPage from "./dialogs-reducer";
import usersPage from "./users-reducer";
import sidebar from "./sidebar-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage, dialogsPage, sidebar, usersPage, auth:authReducer, form: formReducer, app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store