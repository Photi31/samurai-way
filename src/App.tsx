import React from 'react';
import s from './App.module.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Main} from "./components/main/Main";
import {Messages} from "./components/main/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <div className={s.App}>
            <Header/>
            <Navigation/>
            <div>
                <Route path={'/main'} component={Main}/>
                <Route path={'/messages'} component={Messages}/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
