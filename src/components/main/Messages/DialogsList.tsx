import React from 'react';
import s from './DialogsList.module.css'

type DialogsListPropsType = {
    dialogs: string[]
}

export const DialogsList = (props: DialogsListPropsType) => {
    return (
        <div>
            <h3 className={s.title}>dialogs</h3>
            <ul className={s.list}>
                {props.dialogs.map(el => {
                    return <li>{el}</li>
                })}
            </ul>
        </div>
    )
}