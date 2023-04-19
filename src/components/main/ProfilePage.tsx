import React from 'react';
import s from './Profile.module.css';
import {MainImg} from "./MainImg/MainImg";
import {Profile, ProfileType} from "./ProfilePage/Profile";
import {SendMyPostContainer} from "./SendMyPost/SendMyPostContainer";
import {Posts, PostType} from "./Posts/Posts";
import {Redirect} from "react-router-dom";

type  ProfilePageType = {
    profile: ProfileType
    posts: Array<PostType>
    textInArea: string
    isAuth: boolean
}


export function ProfilePage (props: ProfilePageType) {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <main className={s.main}>
            <MainImg/>
            <Profile profile={props.profile}/>
            <SendMyPostContainer />
            <Posts posts={props.posts}/>
        </main>
    )
}