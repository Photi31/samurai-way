import React, {ChangeEvent, RefObject} from 'react';
import s from './Dialog.module.css'
import {Redirect} from "react-router-dom";

type DialogPropsType = {
    messages: {
        _id: string
        message: string
    }[]
    newMessageText: string
    isAuth: boolean
    onClickSendMessage: (textNewMessage: string) => void
    onChangeText: (newTextInArea: string) => void
}

export const Dialog = (props: DialogPropsType) => {

    const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()
    const onClickSendMessage = () => {
        let textNewMessage = newMessageElement.current?.value
        if (textNewMessage) props.onClickSendMessage(textNewMessage)
    }

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newTextInArea = e.currentTarget.value
        props.onChangeText(newTextInArea)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.messageBlock}>
            {props.messages.map(el => {
                return (
                    <div className={s.messageItem}>
                        <img alt='avatar'
                             src={'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081838119523257.jpg'}
                             className={s.avatar}/>
                        <div className={s.message} key={el._id}>{el.message}</div>
                    </div>

                )
            })}
            <div className={s.sendMessage}>
                <pre>
                    <textarea
                        value={props.newMessageText}
                        onChange={onChangeText}
                        ref={newMessageElement}
                        placeholder={'Write your message...'}>
                    </textarea>
                </pre>
                <button onClick={onClickSendMessage}>Send</button>
            </div>
        </div>
    )
}