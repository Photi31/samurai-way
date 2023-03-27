import React from 'react';
import {connect} from "react-redux";
import {Messages} from "./Messages";
import {ActionType} from "../../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/reducers/dialogs-reducer";
import {AppStateType} from "../../../redux/redux-store";



const mapStateToProps = (state: AppStateType) => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        onClickSendMessage: (textNewMessage: string) => {
            dispatch(addMessageActionCreator(textNewMessage))
        },
        onChangeText: (newTextInArea: string) => {
            dispatch(updateNewMessageTextActionCreator(newTextInArea))
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)