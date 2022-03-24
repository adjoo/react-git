import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return <nav className={style.nav}>
        <NavLink to={'/'} className={style.item} activeClassName={style.activeLink} exact>Home</NavLink>
        <NavLink to={'/profile'} className={style.item} activeClassName={style.activeLink}>Profile</NavLink>
        <NavLink to={'/dialogs'}  className={style.item} activeClassName={style.activeLink}>Message</NavLink>
        <NavLink to={'/news'}  className={style.item} activeClassName={style.activeLink}>News</NavLink>
        <NavLink to={'/music'}  className={style.item} activeClassName={style.activeLink}>Music</NavLink>
        <NavLink to={'/settings'}  className={style.item} activeClassName={style.activeLink}>Settings</NavLink>


    </nav>
}


export default Navbar;