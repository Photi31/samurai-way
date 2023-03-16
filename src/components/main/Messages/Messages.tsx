import React from 'react';
import s from './Messages.module.css'
import {DialogsList} from "./DialogsList";
import {Dialog} from "./Dialog";
import {ActionType} from "../../../redux/store";

type MessagesPropsType = {
    state: {
        dialogs: {
            dialogsPerson: {
                _id: string
                name: string
            }[]
            messages: {
                _id: string
                message: string
            }[]
        }
        newMessageText: string
    }
    dispatch: (action: ActionType) => void
}

export function Messages (props: MessagesPropsType) {
    return (
        <div className={s.dialogsList}>
            <DialogsList dialogsPerson={props.state.dialogs.dialogsPerson}/>
            <Dialog messages={props.state.dialogs.messages}
                    newMessageText={props.state.newMessageText}
                    dispatch={props.dispatch}/>
        </div>
    )
}