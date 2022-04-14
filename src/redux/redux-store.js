import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import profilePage from "./profile-reducer";
import dialogsPage from "./dialogs-reducer";
import usersPage from "./users-reducer";
import sidebar from "./sidebar-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";


/*with chrome redux*/
const middleware = [thunkMiddleware,]
let reducers = combineReducers({
    profilePage, dialogsPage, sidebar, usersPage, auth:authReducer, form: formReducer, app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)));
/*/

/* without Chrome redux
let reducers = combineReducers({
    profilePage, dialogsPage, sidebar, usersPage, auth:authReducer, form: formReducer, app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;
/*/
export default store