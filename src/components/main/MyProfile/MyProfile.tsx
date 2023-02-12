import React from 'react';
import s from'./MyProfile.module.css';

export function MyProfile () {
    return (
    <div className={s.profile}>
        <img className={s.profile__avatar} alt={'avatar'} src="https://cs12.pikabu.ru/post_img/big/2022/04/16/4/1650082940124498859.jpg"/>
        <div className={s.profile__data}>
            <h3 className={s.profile__title}>Svetlana N.</h3>
            <div className={s.profile__descr}>
                <div><span>Date of Birth:</span> 31 january</div>
                <div><span>City:</span> Rybinsk</div>
                <div><span>Education:</span> YGMU'13</div>
                <div><span>Web-site:</span> none</div>
            </div>
        </div>
    </div>
    )
}