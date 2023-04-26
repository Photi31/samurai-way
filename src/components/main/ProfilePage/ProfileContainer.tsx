import React from 'react';
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {getProfile, getStatus, updateStatus} from "../../../redux/reducers/profile-reducer";
import {ProfileType} from "./Profile";
import {PostType} from "../Posts/Posts";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType
    posts: Array<PostType>
    textInArea: string
    status: string
}
type MapDispatchPropsType = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type PathParamType = {
    userId: string
    status: string
}
type ContainerType = MapStateToPropsType & MapDispatchPropsType
export type ProfileContainerType = RouteComponentProps<PathParamType> & ContainerType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '28461';
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <ProfilePage profile={this.props.profile}
                         posts={this.props.posts}
                         textInArea={this.props.textInArea}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        textInArea: state.profilePage.textInArea,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)