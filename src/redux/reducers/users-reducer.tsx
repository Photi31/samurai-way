import React from 'react';
import {v1} from "uuid";
import {UserType} from "../../components/Users/Users";
import {ActionType} from "../store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

export type FollowAT = {
    type: 'FOLLOW'
    userID: string
}
export type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: string
}

export const initialState = [
    {
        id: v1(),
        avatar: 'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081784126494530.jpg',
        follow: true,
        fullName: 'Irina',
        status: 'My good status - I am boos',
        location: {
            country: 'Russia',
            city: 'Rybinsk'
        }
    },
    {
        id: v1(),
        avatar: 'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081870150847539.jpg',
        follow: true,
        fullName: 'Sveta',
        status: 'My good status - I am boos',
        location: {
            country: 'Russia',
            city: 'Rybinsk'
        }
    },
    {
        id: v1(),
        avatar: 'https://cs12.pikabu.ru/post_img/big/2022/04/16/4/1650081862171055127.jpg',
        follow: true,
        fullName: 'Andrey',
        status: 'My good status - I am boos',
        location: {
            country: 'Russia',
            city: 'Rybinsk'
        }
    },
    {
        id: v1(),
        avatar: 'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081776119167382.jpg',
        follow: true,
        fullName: 'Sanya',
        status: 'My good status - I am boos',
        location: {
            country: 'Russia',
            city: 'Rybinsk'
        }
    },
    {
        id: v1(),
        avatar: 'https://cs12.pikabu.ru/post_img/big/2022/04/16/4/16500819191563498.jpg',
        follow: true,
        fullName: 'Lexa',
        status: 'My good status - I am boos',
        location: {
            country: 'Russia',
            city: 'Rybinsk'
        }
    },
    {
        id: v1(),
        avatar: 'https://cs12.pikabu.ru/post_img/big/2022/04/16/4/165008296512717634.jpg',
        follow: true,
        fullName: 'Dima',
        status: 'My good status - I am boos',
        location: {
            country: 'Russia',
            city: 'Rybinsk'
        }
    }
]

export const usersReducer = (state: Array<UserType> = initialState,
                               action: ActionType): Array<UserType> => {
    //debugger
    switch (action.type) {
        case 'FOLLOW':
            return state.map(user => user.id === action.userID ? {...user, follow: true} : user)
        case 'UNFOLLOW':
            return state.map(user => user.id === action.userID ? {...user, follow: false} : user)
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