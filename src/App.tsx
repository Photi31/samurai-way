import React from 'react';
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import { Redirect, Route} from "react-router-dom";
import {Messages} from "./components/main/Messages/Messages";
import {Main} from "./components/main/Main";
import {UsersContainer} from "./components/Users/UsersContainer";


function App() {

  return (
        <div className={s.App}>
            <Header/>
            <Navigation/>
            <div>
                <Redirect exact from={'/'} to={'/main'}/>
                <Route path={'/main'}
                       render={() => <Main/>}
                />
                <Route path={'/messages'}
                       render={() => <Messages/>}
                />
                <Route path={'/users'}
                       render={() => <UsersContainer/>}
                />
            </div>
        </div>

  );
}

export default App;
