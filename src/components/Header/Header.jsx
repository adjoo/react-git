import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Header.module.css'

const Header = (props) => {
    const userLogOut = () => {
        props.logout();
    }


    return (<header className={style.header}>
        <img src="https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg" alt=""/>

            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div><span className={style.userName}>{props.login}</span><button onClick={userLogOut}>LogOut</button></div>
                    : <NavLink to={"/login"}>'log In'</NavLink>}
            </div>



    </header>)

}

export default Header;
