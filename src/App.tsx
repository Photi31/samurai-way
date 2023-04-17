import React from 'react';
import s from './App.module.css';
import {Navigation} from "./components/navigation/Navigation";
import { Redirect, Route} from "react-router-dom";
import {Messages} from "./components/main/Messages/Messages";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/main/ProfileContainer";
import axios from "axios";
import HeaderContainer from "./components/header/HeaderContainer";

export const res = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "67dd4401-c897-43e6-a058-b14b4d86756b"
    }
})

function App() {

  return (
        <div className={s.App}>
            <HeaderContainer/>
            <Navigation/>
            <div>
                <Redirect exact from={'/'} to={'/profile'}/>
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer/>}
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
