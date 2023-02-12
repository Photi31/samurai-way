import React from 'react';
import s from './Messages.module.css'
import {DialogsList} from "./DialogsList";
import {Dialog} from "./Dialog";

export function Messages () {

    const dialogs = ['Mama', 'Alex', 'Dima', 'Leha', 'Sasha', 'IT-Incubator']
    const messages = ['first message', 'second message', 'third message', 'first message', 'second message', 'third message']

    return (
        <div className={s.dialogsList}>
            <DialogsList dialogs={dialogs}/>
            <Dialog messages={messages}/>
        </div>
    )
}