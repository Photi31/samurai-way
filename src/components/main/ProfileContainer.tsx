import React from 'react';
import {ProfilePage} from "./ProfilePage";
import {res} from "../../App";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {ProfileType} from "./ProfilePage/Profile";
import {PostType} from "./Posts/Posts";


type ProfileContainerType = {
    profile: ProfileType
    posts: Array<PostType>
    textInArea: string
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        res.get(`profile/2`)
            .then(response => {
                // this.props.setUserProfile(response.data)
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

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        textInArea: state.profilePage.textInArea
    }
}


export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)