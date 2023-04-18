import React from 'react';
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {ProfileType} from "./ProfilePage/Profile";
import {PostType} from "./Posts/Posts";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

type MapStateToPropsType = {
    profile: ProfileType
    posts: Array<PostType>
    textInArea: string
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type PathParamType = {
    userId: string
}
type ContainerType = MapStateToPropsType & MapDispatchPropsType
type ProfileContainerType = RouteComponentProps<PathParamType> & ContainerType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2';
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <ProfilePage profile={this.props.profile}
                         posts={this.props.posts}
                         textInArea={this.props.textInArea}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        textInArea: state.profilePage.textInArea
    }
}

let WithURLContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile}) (WithURLContainerComponent)