import {createStore, combineReducers} from 'redux'
import profilePage from "./profile-reducer";
import dialogsPage from "./dialogs-reducer";
import sidebar from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage, dialogsPage, sidebar
});

let store = createStore(reducers)

export default store