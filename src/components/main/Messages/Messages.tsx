import React from 'react';
import s from './Messages.module.css'
import {DialogsList} from "./DialogsList";
import {Dialog} from "./Dialog";

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
    }
}

export function Messages (props: MessagesPropsType) {
    return (
        <div className={s.dialogsList}>
            <DialogsList dialogsPerson={props.state.dialogs.dialogsPerson}/>
            <Dialog messages={props.state.dialogs.messages}/>
        </div>
    )
}