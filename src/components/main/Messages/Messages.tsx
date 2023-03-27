import React from 'react';
import s from './Messages.module.css'
import {DialogsList} from "./DialogsList";
import {Dialog} from "./Dialog";
import {DialogsPagePropsType} from "../../../redux/store";

type MessagesPropsType = {
    state: DialogsPagePropsType
    onClickSendMessage: (textNewMessage: string) => void
    onChangeText: (newTextInArea: string) => void
}

export function Messages (props: MessagesPropsType) {
    return (
        <div className={s.dialogsList}>
            <DialogsList dialogsPerson={props.state.dialogs.dialogsPerson}/>
            <Dialog messages={props.state.dialogs.messages}
                    newMessageText={props.state.newMessageText}
                    onClickSendMessage={props.onClickSendMessage}
                    onChangeText={props.onChangeText}
            />
        </div>
    )
}