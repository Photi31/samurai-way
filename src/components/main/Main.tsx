import React from 'react';
import s from './Main.module.css';
import {MainImg} from "./MainImg/MainImg";
import {MyProfile} from "./MyProfile/MyProfile";
import {SendMyPost} from "./SendMyPost/SendMyPost";
import {Posts} from "./Posts/Posts";

export function Main () {

    const posts = [
        {_id: 1, title: 'Post 1', descr: "This is first post about me..."},
        {_id: 2, title: 'Post 2', descr: "This is post about my family..."},
        {_id: 3, title: 'Post 3', descr: "This is post about my jobs..."},
    ]

    return (
        <main className={s.main}>
            <MainImg/>
            <MyProfile/>
            <SendMyPost/>
            <Posts posts={posts}/>
        </main>
    )
}