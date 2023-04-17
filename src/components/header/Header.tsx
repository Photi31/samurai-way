import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean,
    login: string
}

export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img alt={'logo'}
                 className={s.logo}
                 src="https://img.freepik.com/premium-vector/colorful-elephant-zentangle-arts-isolated-black-background_122297-2007.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}