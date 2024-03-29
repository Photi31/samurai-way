import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    setCurrentPage, getUsers, followUser, unfollowUser
} from "../../redux/reducers/users-reducer";
import {compose} from "redux";

type UsersContainerType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: string[]
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number) => void
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage)
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.getUsers(pageNumber)
    }

    render = () => {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      followingProgress={this.props.followingProgress}
                      setCurrentPage={this.setCurrentPage}
                      followUser={this.props.followUser}
                      unfollowUser={this.props.unfollowUser}
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setCurrentPage, getUsers, followUser, unfollowUser}),
)(UsersContainer)