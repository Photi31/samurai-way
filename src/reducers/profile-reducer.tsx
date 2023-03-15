import {v1} from "uuid";
import {ActionType, ProfilePagePropsType} from "../state";

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

export const profileReducer = (state: ProfilePagePropsType, action: ActionType) => {
    if (action.type === ADD_POST) {
        let newPost = {
            _id: v1(),
            title: `Post ${state.posts.length + 1}`,
            descr: action.textNewPost
        }
        state.posts.push(newPost)
        state.textInArea = ''
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.textInArea = action.newTextInArea
    }
    return state
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