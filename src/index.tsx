import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, StatePropsType, subscribe, updateNewPostText} from './state'

let rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    )
}

rerenderEntireTree(state)

subscribe(()=>rerenderEntireTree(state))


