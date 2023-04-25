import React from 'react';
import s from './App.module.css';
import {Navigation} from "./components/navigation/Navigation";
import { Redirect, Route} from "react-router-dom";
import {Messages} from "./components/main/Messages/Messages";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {LoginPage} from "./components/login/LoginPage";
import ProfileContainer from "./components/main/ProfilePage/ProfileContainer";


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
                <Route path={'/login'}
                       render={() => <LoginPage/>}
                />
            </div>
        </div>

  );
}

export default App;
