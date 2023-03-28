import React, {MouseEvent} from 'react';
import s from './Users.module.css';

export type UserType = {
    id: string
    avatar: string
    follow: boolean
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
}

type UsersType = {
    users: Array<UserType>
    onUnfollow: (userID: string) => void
    onFollow: (userID: string) => void
}

export const Users = (props: UsersType) => {

    const onUnfollow = (e: MouseEvent<HTMLButtonElement>) => {
        props.onUnfollow(e.currentTarget.id)
    }
    const onFollow = (e: MouseEvent<HTMLButtonElement>) => {
        props.onFollow(e.currentTarget.id)
    }

    return (
        <div className={s.wrapper}>
            {props.users.map(user => {
                return (
                    <div className={s.users}>
                        <img alt={'avatar'} className={s.avatar} src={user.avatar}/>
                        <div className={s.info}>
                            <div className={s.descr}>
                                <span>{user.fullName}</span>
                                <p>{user.status}</p>
                            </div>
                            <div className={s.adres}>
                                <span>{user.location.city}</span>
                                <p>{user.location.country}</p>
                            </div>
                        </div>
                        <div className={s.button}>
                            {user.follow ?
                                <button id={user.id} onClick={onUnfollow} className={s.unfollow}>UNFOLLOW</button>
                                : <button id={user.id} onClick={onFollow} className={s.follow}>FOLLOW</button>
                            }
                        </div>
                    </div>
                )
            })}
            <button className={s.seeMore}>SEE MORE</button>
        </div>)
}