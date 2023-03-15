import React from 'react';
import s from './Main.module.css';
import {MainImg} from "./MainImg/MainImg";
import {MyProfile} from "./MyProfile/MyProfile";
import {SendMyPost} from "./SendMyPost/SendMyPost";
import {Posts} from "./Posts/Posts";
import {} from "../../state";

type MainPropsType = {
    state: {
        posts: {
            _id: string
            title: string
            descr: string
        }[]
        textInArea: string
    }
    dispatch: (action: any) => void
}

export function Main (props: MainPropsType) {

    return (
        <main className={s.main}>
            <MainImg/>
            <MyProfile/>
            <SendMyPost dispatch={props.dispatch}
                        textInArea={props.state.textInArea}/>
            <Posts posts={props.state.posts}/>
        </main>
    )
}