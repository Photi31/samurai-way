import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {ActionType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setAC, unfollowAC} from "../../redux/reducers/users-reducer";


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        onFollow: (userID: string) => {
            dispatch(followAC(userID))
        },
        onUnfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        set: (initialState: Array<UserType>) => {
            dispatch(setAC(initialState))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)