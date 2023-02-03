import React from 'react';
import './MyProfile.css';

export function MyProfile () {
    return (
    <div className={'profile'}>
        <img className={'avatar'} alt={'avatar'} src="https://cs12.pikabu.ru/post_img/big/2022/04/16/4/1650082940124498859.jpg"/>
        <div className={'data'}>
            <h3 className={'title'}>Svetlana N.</h3>
            <div className={'descr'}>
                <div>Date of Birth: 31 january</div>
                <div>City: Rybinsk</div>
                <div>Education: YGMU'13</div>
                <div>Web-site: none</div>
            </div>
        </div>
    </div>
    )
}