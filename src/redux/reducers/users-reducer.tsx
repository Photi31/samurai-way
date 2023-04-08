import React from 'react';
import { UserType} from "../../components/Users/Users";
import {ActionType} from "../store";

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET = 'SET'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

export type FollowAT = {
    type: 'FOLLOW'
    userID: string
}
export type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: string
}
export type SetAT = {
    type: 'SET'
    initialState: InitialStateType
}
export type setCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export const usersReducer = (state: InitialStateType = initialState,
                               action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state,
            users: state.users.map(user => String(user.id) === action.userID ? {...user, followed: true} : user)
            }
        case 'UNFOLLOW':
            return {...state,
                users: state.users.map(user => String(user.id) === action.userID ? {...user, followed: false} : user)
            }
        case "SET":
            return {...action.initialState}
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        default: return state
    }
}

export const followAC = (userID: string): FollowAT => {
    return {
        type: FOLLOW,
        userID
    }
}
export const unfollowAC = (userID: string): UnfollowAT => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export const setAC = (initialState: InitialStateType): SetAT => {
    return {
        type: SET,
        initialState
    }
}
export const setCurrentPageAC = (currentPage: number): setCurrentPageAT => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}