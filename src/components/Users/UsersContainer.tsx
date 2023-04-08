import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {ActionType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setAC, setCurrentPageAC, unfollowAC} from "../../redux/reducers/users-reducer";
import axios from "axios";

type UsersAPIType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onUnfollow: (userID: string) => void
    onFollow: (userID: string) => void
    setCurrentPage: (currentPage: number) => void
    set: (initialState: InitialStateType) => void
}

const res = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "67dd4401-c897-43e6-a058-b14b4d86756b"
    }
})

class UsersAPIContainer extends React.Component<UsersAPIType> {

    componentDidMount() {
        res.get(`users?page=${this.props.currentPage}`)
            .then(response => {
                this.props.set({
                    users: response.data.items,
                    pageSize: response.data.items.length,
                    totalUsersCount: response.data.totalCount,
                    currentPage: 1
                })
            })
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        res.get(`users?page=${pageNumber}`)
            .then(response => {
                this.props.set({
                    users: response.data.items,
                    pageSize: response.data.items.length,
                    totalUsersCount: response.data.totalCount,
                    currentPage: pageNumber
                })
            })
    }

    render = () => {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onFollow={this.props.onFollow}
                      onUnfollow={this.props.onUnfollow}
                      setCurrentPage={this.setCurrentPage}
        />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        set: (initialState: InitialStateType) => {
            dispatch(setAC(initialState))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)