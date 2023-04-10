import React, {MouseEvent} from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

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
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    unfollow: (userID: string) => void
    follow: (userID: string) => void
    setCurrentPage: (currentPage: number) => void
}

export const Users = (props: UsersType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    const unfollow = (e: MouseEvent<HTMLButtonElement>) => {
        props.unfollow(e.currentTarget.id)
    }
    const follow = (e: MouseEvent<HTMLButtonElement>) => {
        props.follow(e.currentTarget.id)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span id={String(p)}
                                 className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => props.setCurrentPage(p)}>{p}</span>
                })}
                {pagesCount > 10 && <div className={s.pages}>
                    <span>...</span>
                    <span id={String(pagesCount)}
                          onClick={() => props.setCurrentPage(pagesCount)}
                          className={props.currentPage === pagesCount ? s.selectedPage : ''}>{pagesCount}</span>
                </div>}

            </div>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={s.users}>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt={'avatar'}
                                 className={s.avatar}
                                 src={user.photos.small || 'https://cs14.pikabu.ru/post_img/big/2022/04/16/4/1650081784126494530.jpg'}/>
                        </NavLink>
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
                                <button id={user.id} onClick={unfollow}
                                        className={s.unfollow}>UNFOLLOW</button>
                                : <button id={user.id} onClick={follow} className={s.follow}>FOLLOW</button>
                            }
                        </div>
                    </div>
                )
            })}
            <button className={s.seeMore}>SEE MORE</button>
        </div>
    )
}