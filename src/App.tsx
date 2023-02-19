import React from 'react';
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Main} from "./components/main/Main";
import {Messages} from "./components/main/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";

type AppPropsType = {
    state: {
        posts:
            {
                _id: number
                title: string
                descr: string
            } []

        dialogs: {
            dialogsPerson: Array<string>
            messages: Array<string>
        }
    }
}

function App(props: AppPropsType) {

  return (
      <BrowserRouter>
        <div className={s.App}>
            <Header/>
            <Navigation/>
            <div>
                <Route path={'/main'}
                       render={() => <Main state={props.state.posts}/>}/>
                <Route path={'/messages'}
                       render={() => <Messages state={props.state.dialogs}/>}/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
