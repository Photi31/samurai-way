import React from 'react';
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile} from "../../redux/reducers/profile-reducer";
import {ProfileType} from "./ProfilePage/Profile";
import {PostType} from "./Posts/Posts";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    profile: ProfileType
    posts: Array<PostType>
    textInArea: string
}
type MapDispatchPropsType = {
    getProfile: (userId: string) => void
}
type PathParamType = {
    userId: string
}
type ContainerType = MapStateToPropsType & MapDispatchPropsType
export type ProfileContainerType = RouteComponentProps<PathParamType> & ContainerType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2';
        this.props.getProfile(userId)
    }

    render() {
        return (
        <ProfilePage profile={this.props.profile}
                         posts={this.props.posts}
                         textInArea={this.props.textInArea}/>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        textInArea: state.profilePage.textInArea
    }
}

let WithURLContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getProfile}) (WithURLContainerComponent)