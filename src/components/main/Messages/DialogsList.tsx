import React from 'react';
import s from './DialogsList.module.css'

type DialogsListPropsType = {
    dialogsPerson: {
        _id: string
        name: string
    }[]
}

export const DialogsList = (props: DialogsListPropsType) => {
    return (
        <div>
            <h3 className={s.title}>dialogs</h3>
            <ul className={s.list}>
                {props.dialogsPerson.map(el => {
                    return <li>{el}</li>
                })}
            </ul>
        </div>
    )
}