import React from 'react';
import './Main.css';
import {MainImg} from "./MainImg/MainImg";
import {MyProfile} from "./MyProfile/MyProfile";
import {SendMyPost} from "./SendMyPost/SendMyPost";
import {Posts} from "./Posts/Posts";

export function Main () {
    return (
        <main className="main">
            <MainImg/>
            <MyProfile/>
            <SendMyPost/>
            <Posts/>
        </main>
    )
}