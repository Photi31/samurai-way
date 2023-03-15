import {v1} from "uuid";
import {ActionType, DialogsPagePropsType} from "../state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    textNewMessage: string
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newTextInArea: string
}

export const dialogsReducer = (state: DialogsPagePropsType, action: ActionType) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            _id: v1(),
            message: `${action.textNewMessage}`
        }
        state.dialogs.messages.push(newMessage)
        state.newMessageText = ''
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newTextInArea
    }
    return state
}

export const addMessageActionCreator = (textNewMessage: string): AddMessageActionType => {
    return {
        type: ADD_MESSAGE,
        textNewMessage: textNewMessage
    }
}
export const updateNewMessageTextActionCreator = (newTextInArea: string): UpdateNewMessageTextActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextInArea: newTextInArea
    }
}