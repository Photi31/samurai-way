import React from 'react';
import './SendMyPost.css';

export function SendMyPost () {
    return(
        <div className={'myPost'}>
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