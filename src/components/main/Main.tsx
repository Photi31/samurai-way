import React from 'react';
import s from './Main.module.css';
import {MainImg} from "./MainImg/MainImg";
import {MyProfile} from "./MyProfile/MyProfile";
import {SendMyPost} from "./SendMyPost/SendMyPost";
import {Posts} from "./Posts/Posts";

type MainPropsType = {
    state: Array<{
        _id: number
        title: string
        descr: string
    }>

}

export function Main (props: MainPropsType) {

    return (
        <main className={s.main}>
            <MainImg/>
            <MyProfile/>
            <SendMyPost/>
            <Posts posts={props.state}/>
        </main>
    )
}