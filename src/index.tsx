import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StorePropsType} from './state'

let rerenderEntireTree = (store: StorePropsType) => {
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(()=>rerenderEntireTree(store.getState()))


