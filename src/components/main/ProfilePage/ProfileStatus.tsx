import React from "react";
import s from "./Profile.module.css";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: true
        })
    }

    render() {
        return (
            <div className={s.profile__descr}>
                {this.state.editMode
                    ? <input autoFocus={true}
                             onBlur={this.deactivateEditMode.bind(this)}
                             value={this.props.status}/>
                    : <span onDoubleClick={this.activateEditMode.bind(this)}>
                        {this.props.status}
                </span>
                }
            </div>
        )
    }
}

export default ProfileStatus