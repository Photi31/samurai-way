import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/redux-store'
import {StatePropsType} from "./redux/store";

let rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


