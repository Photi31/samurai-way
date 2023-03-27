import React from 'react';
import s from './Main.module.css';
import {MainImg} from "./MainImg/MainImg";
import {MyProfile} from "./MyProfile/MyProfile";
import {SendMyPost} from "./SendMyPost/SendMyPost";
import {Posts} from "./Posts/Posts";

type MainPropsType = {
    state: {
        posts: {
            _id: string
            title: string
            descr: string
        }[]
        textInArea: string
    }
    addPost: (textNewPost: string) => void
    updateNewPostText: (newTextInArea: string) => void
}

export function Main (props: MainPropsType) {

    return (
        <main className={s.main}>
            <MainImg/>
            <MyProfile/>
            <SendMyPost addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                        textInArea={props.state.textInArea}/>
            <Posts posts={props.state.posts}/>
        </main>
    )
}