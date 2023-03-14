import React from 'react';
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Main} from "./components/main/Main";
import {Messages} from "./components/main/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import {StatePropsType, updateNewPostText} from "./state";

export type AppPropsType = {
    state: StatePropsType
    addPost: (textNewPost: string) => void
    updateNewPostText: (newTextInArea: string) => void
}

function App(props: AppPropsType) {

  return (
      <BrowserRouter>
        <div className={s.App}>
            <Header/>
            <Navigation/>
            <div>
                <Route path={'/main'}
                       render={() => <Main state={props.state.profilePage}
                                           addPost={props.addPost}
                                           updateNewPostText={updateNewPostText}/>}/>
                <Route path={'/messages'}
                       render={() => <Messages state={props.state.dialogsPage.dialogs}/>}/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
