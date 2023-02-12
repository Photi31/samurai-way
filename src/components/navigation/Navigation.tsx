import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

export function Navigation () {
    return (
        <nav className={s.nav}>
            <NavLink to='/main' activeClassName={s.activeLink}>Profile</NavLink>
            <NavLink to='/messages' activeClassName={s.activeLink}>Messages</NavLink>
            <a href='#s'>News</a>
            <a href='#s'>Music</a>
            <a href='#s'>Settings</a>
        </nav>
    )
}