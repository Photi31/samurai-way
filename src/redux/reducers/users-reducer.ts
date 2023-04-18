import { UserType} from "../../components/Users/Users";
import {ActionType} from "../store";

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: string[]
}
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    followingProgress: []
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type FollowAT = {
    type: 'FOLLOW'
    userID: string
}
export type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: string
}
export type SetAT = {
    type: 'SET-USERS'
    initialState: InitialStateType
}
export type setCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
export type ToggleFollowingProgressAT = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: string
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
        case "SET-USERS":
            return {...action.initialState}
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingProgress: action.isFetching ? [...state.followingProgress, action.userId]
                    : [...state.followingProgress.filter(id => id !== action.userId)]
            }
        default: return state
    }
}

export const follow = (userID: string): FollowAT => {
    return {
        type: FOLLOW,
        userID
    }
}
export const unfollow = (userID: string): UnfollowAT => {
    return {
        type: UNFOLLOW,
        userID
    }
}
export const setUsers = (initialState: InitialStateType): SetAT => {
    return {
        type: SET_USERS,
        initialState
    }
}
export const setCurrentPage = (currentPage: number): setCurrentPageAT => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const toggleFollowingProgress = (isFetching: boolean, userId: string): ToggleFollowingProgressAT => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}