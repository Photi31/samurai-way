import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Posts, PostsPropsType} from "./Posts";


const mapStateToProps = (state: AppStateType): PostsPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

export const PostsContainer = connect(mapStateToProps)(Posts)