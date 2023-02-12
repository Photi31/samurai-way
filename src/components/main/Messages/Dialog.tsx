import React from 'react';
import s from './Dialog.module.css'

type DialogPropsType = {
    messages: string[]
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.messageBlock}>
            {props.messages.map(el => {
               return (
                   <div className={s.messageItem}>
                       <img src={'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081838119523257.jpg'} className={s.avatar}/>
                       <div className={s.message}>{el}</div>
                   </div>
               )
            })}
        </div>
    )
}