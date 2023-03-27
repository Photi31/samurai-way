import React from 'react';
import s from './Main.module.css';
import {MainImg} from "./MainImg/MainImg";
import {MyProfile} from "./MyProfile/MyProfile";
import {SendMyPostContainer} from "./SendMyPost/SendMyPostContainer";
import {PostsContainer} from "./Posts/PostsContainer";


export function Main () {

    return (
        <main className={s.main}>
            <MainImg/>
            <MyProfile/>
            <SendMyPostContainer/>
            <PostsContainer/>
        </main>
    )
}