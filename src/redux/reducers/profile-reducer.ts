import {v1} from "uuid";
import {ActionType, ProfilePagePropsType} from "../store";
import {ProfileType} from "../../components/main/ProfilePage/Profile";
import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";

export type AddPostAT = ReturnType<typeof addPostActionCreator>
export type setUserProfileAT = ReturnType<typeof setUserProfile>
export type setUserStatusAT = ReturnType<typeof setUserStatus>

const initialState: ProfilePagePropsType = {
    profile: {
        aboutMe: 'I\'m frontend developer',
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null
        },
        fullName: 'Svetlana N.',
        lookingForAJob: true,
        lookingForAJobDescription: 'I want to job in beautiful company',
        photos: {
            small: "https://cs12.pikabu.ru/post_img/big/2022/04/16/4/1650082940124498859.jpg",
            large: null
        },
        userId: 28461
    },
    posts: [
        {_id: v1(), title: 'Post 1', descr: "This is first post about me..."},
        {_id: v1(), title: 'Post 2', descr: "This is post about my family..."},
        {_id: v1(), title: 'Post 3', descr: "This is post about my jobs..."},
    ],
    status: ''
}

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionType): ProfilePagePropsType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                _id: v1(),
                title: `Post ${state.posts.length + 1}`,
                descr: action.textNewPost
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case "SET-USER-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreator = (textNewPost: string) => ({type: 'ADD-POST', textNewPost: textNewPost} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'SET-USER-STATUS', status} as const)

export const getProfile = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.getProfile(userId)
        .then(data => {
            console.log('profile: ', data)
            dispatch(setUserProfile(data))
        })
}
export const getStatus = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.getStatus(userId)
        .then(data => {
            console.log(data)
            dispatch(setUserStatus(data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) dispatch(setUserStatus(status))
        })
}