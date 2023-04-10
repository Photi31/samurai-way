import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {follow, InitialStateType, setUsers, setCurrentPage, unfollow} from "../../redux/reducers/users-reducer";
import {res} from "../../App";

type UsersContainerType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (initialState: InitialStateType) => void
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        res.get(`users?page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers({
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
                this.props.setUsers({
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
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
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

export default connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage})(UsersContainer)