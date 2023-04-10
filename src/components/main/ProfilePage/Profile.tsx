import React from 'react';
import s from './Profile.module.css';

export type  ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string | null
        large: string | null
    }
    userId: number
}

type ProfilePropsType = {
    profile: ProfileType
}

export function Profile(props: ProfilePropsType) {
    const avatar = "https://cs12.pikabu.ru/post_img/big/2022/04/16/4/1650082940124498859.jpg"

    return (
        <div key={props.profile.userId} className={s.profile}>
            <img className={s.profile__avatar} alt={'avatar'}
                 src={props.profile.photos.small || avatar}/>
            <div className={s.profile__data}>
                <h3 className={s.profile__title}>{props.profile.fullName}</h3>
                <div className={s.profile__descr}>{props.profile.aboutMe}</div>
            </div>
            <div className={s.profile__data}>
                <h3 className={s.profile__title}>{props.profile.lookingForAJob ? 'Ищу работу' : 'Уже работаю'}</h3>
                {props.profile.lookingForAJob && <div className={s.profile__descr}>{props.profile.lookingForAJobDescription}</div>}
            </div>
        </div>
    )
}

// data:
//     aboutMe: "я круто чувак 1001%"
//     contacts: {facebook: 'facebook.com',
//            website: null, vk: 'vk.com/dimych',
//            twitter: 'https://twitter.com/@sdf',
//            instagram: 'instagra.com/sds', …}
//     fullName: "samurai dimych"
//     lookingForAJob: true
//     lookingForAJobDescription: "не ищу, а дурачусь"
//     photos: {small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
//          large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'}
//     userId: 2