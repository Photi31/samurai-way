import React, {ChangeEvent, RefObject} from 'react';
import s from './SendMyPost.module.css';
import {addPostActionCreator, ActionType, updateNewPostTextActionCreator} from "../../../state";

type SendMyPostPropsType = {
    dispatch: (action: ActionType) => void
    textInArea: string
}

export function SendMyPost(props: SendMyPostPropsType) {

    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onClickHandler = () => {
        let textNewPost = newPostElement.current?.value
        if (textNewPost) props.dispatch(addPostActionCreator(textNewPost))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newTextInArea = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newTextInArea))
    }

    return (
        <div className={s.myPost}>
            <h3>My posts</h3>
            <div>
                <pre>
                    <textarea
                        value={props.textInArea}
                        onChange={onChangeHandler}
                        ref={newPostElement}
                        placeholder={'Write your post...'}>
                    </textarea>
                </pre>
                <button onClick={onClickHandler}>Send</button>
            </div>
        </div>
    )
}