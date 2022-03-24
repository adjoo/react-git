import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store'
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store = {store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())


store.subscribe( () => { rerenderEntireTree(store.getState())})
