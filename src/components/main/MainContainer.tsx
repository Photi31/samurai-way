import React from 'react';
import {ActionType} from "../../redux/store";
import {connect} from "react-redux";
import {Main} from './Main';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducers/profile-reducer";
import {AppStateType} from "../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: (textNewPost: string) => {
            dispatch(addPostActionCreator(textNewPost))
        },
        updateNewPostText: (newTextInArea: string) => {
            dispatch(updateNewPostTextActionCreator(newTextInArea))
        }
    }
}

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)