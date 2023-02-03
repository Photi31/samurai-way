import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Main} from "./components/main/Main";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <Main/>
    </div>
  );
}

export default App;
