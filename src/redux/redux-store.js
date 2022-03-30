import {createStore, combineReducers} from 'redux'
import profilePage from "./profile-reducer";
import dialogsPage from "./dialogs-reducer";
import usersPage from "./users-reducer";
import sidebar from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage, dialogsPage, sidebar, usersPage,
});

let store = createStore(reducers);

window.store = store;

export default store