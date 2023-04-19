import {v1} from "uuid";
import {ActionType, DialogsPagePropsType} from "../store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type AddMessageAT = {
    type: 'ADD-MESSAGE'
    textNewMessage: string
}
export type UpdateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newTextInArea: string
}

const initialState: DialogsPagePropsType = {
    dialogs: {
        dialogsPerson: [
            {_id: v1(), name: 'Mama'},
            {_id: v1(), name: 'Alex'},
            {_id: v1(), name: 'Dima'},
            {_id: v1(), name: 'Leha'},
            {_id: v1(), name: 'Sasha'},
            {_id: v1(), name: 'IT-Incubator'}
        ],
        messages: [
            {_id: v1(), message: 'first message'},
            {_id: v1(), message: 'second message'},
            {_id: v1(), message: 'third message'},
            {_id: v1(), message: 'first message'},
            {_id: v1(), message: 'second message'},
            {_id: v1(), message: 'third message'},
            {_id: v1(), message: 'Sasha'}
        ]
    },
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPagePropsType = initialState,
                               action: ActionType): DialogsPagePropsType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {
                _id: v1(),
                message: `${action.textNewMessage}`
            }
            return  {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    messages: [...state.dialogs.messages, newMessage]
                },
                newMessageText: ''
            }
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return  {
                ...state,
                newMessageText: action.newTextInArea
            }
        }
        default: return state
    }
}

export const addMessageActionCreator = (textNewMessage: string): AddMessageAT => {
    return {
        type: ADD_MESSAGE,
        textNewMessage: textNewMessage
    }
}
export const updateNewMessageTextActionCreator = (newTextInArea: string): UpdateNewMessageTextAT => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextInArea: newTextInArea
    }
}