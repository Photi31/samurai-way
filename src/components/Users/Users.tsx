import React, {MouseEvent} from 'react';
import s from './Users.module.css';
import axios from "axios";

export type UserType = {
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    name: string
    status: string | null
    location?: {
        country: string
        city: string
    }
}

type UsersType = {
    users: Array<UserType>
    onUnfollow: (userID: string) => void
    onFollow: (userID: string) => void
    set: (initialState: Array<UserType>) => void
}



export const Users = (props: UsersType) => {

    if(props.users.length === 0) {
        axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers:     {
                "API-KEY": "67dd4401-c897-43e6-a058-b14b4d86756b"
            }
        })
            .get('users')
            .then(response => {
                props.set(response.data.items)
            })

    }

    const onUnfollow = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('onUnfollow', e.currentTarget.id)
        props.onUnfollow(e.currentTarget.id)
    }
    const onFollow = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('onFollow', e.currentTarget.id)
        props.onFollow(e.currentTarget.id)
    }

    return (
        <div className={s.wrapper}>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={s.users}>
                        <img alt={'avatar'}
                             className={s.avatar}
                             src={user.photos.small || 'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081784126494530.jpg'}/>
                        <div className={s.info}>
                            <div className={s.descr}>
                                <span>{user.name}</span>
                                <p>{user.status}</p>
                            </div>
                            <div className={s.adres}>
                                <span>{user.location?.city}</span>
                                <p>{user.location?.country}</p>
                            </div>
                        </div>
                        <div className={s.button}>
                            {user.followed ?
                                <button id={user.id} onClick={onUnfollow} className={s.unfollow}>UNFOLLOW</button>
                                : <button id={user.id} onClick={onFollow} className={s.follow}>FOLLOW</button>
                            }
                        </div>
                    </div>
                )
            })}
            <button className={s.seeMore}>SEE MORE</button>
        </div>
    )
}