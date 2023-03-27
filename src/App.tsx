import React from 'react';
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import { Redirect, Route} from "react-router-dom";
import {MessagesContainer} from "./components/main/Messages/MessagesContainer";
import {MainContainer} from "./components/main/MainContainer";

// export type AppPropsType = {
//     state: StatePropsType
//     dispatch: (action: ActionType) => void
// }

function App() {

  return (
        <div className={s.App}>
            <Header/>
            <Navigation/>
            <div>
                <Redirect exact from={'/'} to={'/main'}/>
                <Route path={'/main'}
                       render={() => <MainContainer/>}
                />
                <Route path={'/messages'}
                       render={() => <MessagesContainer/>}
                />
            </div>
        </div>

  );
}

export default App;
