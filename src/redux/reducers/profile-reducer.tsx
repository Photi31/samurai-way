import {v1} from "uuid";
import {ActionType, ProfilePagePropsType} from "../store";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export type AddPostActionType = {
    type: 'ADD-POST'
    textNewPost: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newTextInArea: string
}

const initialState: ProfilePagePropsType = {
    posts: [
        {_id: v1(), title: 'Post 1', descr: "This is first post about me..."},
        {_id: v1(), title: 'Post 2', descr: "This is post about my family..."},
        {_id: v1(), title: 'Post 3', descr: "This is post about my jobs..."},
    ],
    textInArea: ''
}

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionType): ProfilePagePropsType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                _id: v1(),
                title: `Post ${state.posts.length + 1}`,
                descr: action.textNewPost
            }
            return  {
                posts: [...state.posts, newPost],
                textInArea: ''
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return  {...state, textInArea: action.newTextInArea}
        }
        default: return state
    }
}

export const addPostActionCreator = (textNewPost: string): AddPostActionType => {
    return {
        type: ADD_POST,
        textNewPost: textNewPost
    }
}
export const updateNewPostTextActionCreator = (newTextInArea: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newTextInArea: newTextInArea
    }
}