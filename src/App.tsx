import React from 'react';
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Main} from "./components/main/Main";
import {Messages} from "./components/main/Messages/Messages";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {StatePropsType, store} from "./state";

export type AppPropsType = {
    state: StatePropsType
    dispatch: (action: any) => void
}

function App(props: AppPropsType) {

  return (
      <BrowserRouter>
        <div className={s.App}>
            <Header/>
            <Navigation/>
            <div>
                <Redirect exact from={'/'} to={'/main'}/>
                <Route path={'/main'}
                       render={() => <Main state={props.state.profilePage}
                                           dispatch={props.dispatch}/>}
                />
                <Route path={'/messages'}
                       render={() => <Messages state={props.state.dialogsPage}/>}
                />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
