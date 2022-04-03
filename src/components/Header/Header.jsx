import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

const Header = (props) => {

    return (<header className={style.header}>
        <img src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg" alt=""/>

        <div className={style.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>)

}

export default Header;
