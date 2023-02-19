import React from 'react';
import s from './SendMyPost.module.css';

export function SendMyPost () {
    return(
        <div className={s.myPost}>
            <h3>My posts</h3>
            <div>
                <pre>
                    <textarea placeholder={'Write your post...'}></textarea>
                </pre>
                <button>Send</button>
            </div>
        </div>
    )
}