import React from 'react';
import s from './Header.module.css';

export  function Header () {
    return (
        <header className={s.header}>
            <img alt={'logo'} className={s.logo} src="https://img.freepik.com/premium-vector/colorful-elephant-zentangle-arts-isolated-black-background_122297-2007.jpg"/>
        </header>
    )
}