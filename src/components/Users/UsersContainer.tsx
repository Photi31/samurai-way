import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    InitialStateType,
    setUsers,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress
} from "../../redux/reducers/users-reducer";
import {usersAPI} from "../../api/api";

type UsersContainerType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: string[]
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (initialState: InitialStateType) => void
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage)
            .then(data => {
                this.props.setUsers({
                    users: data.items,
                    pageSize: data.items.length,
                    totalUsersCount: data.totalCount,
                    currentPage: 1,
                    followingProgress: []
                })
            })
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber)
            .then(data => {
                this.props.setUsers({
                    users: data.items,
                    pageSize: data.items.length,
                    totalUsersCount: data.totalCount,
                    currentPage: pageNumber,
                    followingProgress: this.props.followingProgress
                })
            })
    }

    render = () => {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingProgress={this.props.followingProgress}
                      setCurrentPage={this.setCurrentPage}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, toggleFollowingProgress})
(UsersContainer)