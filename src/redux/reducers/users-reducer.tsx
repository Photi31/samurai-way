import React from 'react';
import { UserType} from "../../components/Users/Users";
import {ActionType} from "../store";

const initialState: Array<UserType> = []

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET = 'SET'

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
    initialState: Array<UserType>
}

export const usersReducer = (state: Array<UserType> = initialState,
                               action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'FOLLOW':
            return state.map(user => String(user.id) === action.userID ? {...user, followed: true} : user)
        case 'UNFOLLOW':
            return state.map(user => String(user.id) === action.userID ? {...user, followed: false} : user)
        case "SET":
            return [...action.initialState]
        default: return state
    }
}

export const followAC = (userID: string): FollowAT => {
    return {
        type: FOLLOW,
        userID: userID
    }
}
export const unfollowAC = (userID: string): UnfollowAT => {
    return {
        type: UNFOLLOW,
        userID: userID
    }
}
export const setAC = (initialState: Array<UserType>): SetAT => {
    return {
        type: SET,
        initialState: initialState
    }
}