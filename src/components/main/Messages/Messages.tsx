import React from 'react';
import s from './Messages.module.css'
import {DialogsList} from "./DialogsList";
import {Dialog} from "./Dialog";

type MessagesPropsType = {
    state: {
        dialogsPerson: string[]
        messages: string[]
    }
}

export function Messages (props: MessagesPropsType) {
    return (
        <div className={s.dialogsList}>
            <DialogsList dialogsPerson={props.state.dialogsPerson}/>
            <Dialog messages={props.state.messages}/>
        </div>
    )
}