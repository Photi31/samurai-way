import React from 'react';
import s from './Dialog.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogPropsType = {
    messages: {
        _id: string
        message: string
    }[]
    onClickSendMessage: (textNewMessage: string) => void
}

type FormDataType = {
    newMessageText: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form className={s.sendMessage} onSubmit={props.handleSubmit}>
                <pre>
                    <Field component='textarea'
                           name='newMessageText'
                           placeholder={'Write your message...'}
                    />
                </pre>
        <button>Send</button>
    </form>
}

const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export const Dialog = (props: DialogPropsType) => {

    const addNewMessage = (values: FormDataType) => {
        props.onClickSendMessage(values.newMessageText)
    }

    return (
        <div className={s.messageBlock}>
            {props.messages.map(el => {
                return (
                    <div key={el._id} className={s.messageItem}>
                        <img alt='avatar'
                             src={'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081838119523257.jpg'}
                             className={s.avatar}/>
                        <div className={s.message} >{el.message}</div>

                    </div>
                )
            })}
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}
