import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return <nav className={style.nav}>
        <NavLink to={'/profile'} className={style.item} activeClassName={style.activeLink}>Profile</NavLink>
        <NavLink to={'/dialogs'}  className={style.item} activeClassName={style.activeLink}>Message</NavLink>
        <NavLink to={'/news'}  className={style.item} activeClassName={style.activeLink}>News</NavLink>
        <NavLink to={'/settings'}  className={style.item} activeClassName={style.activeLink}>Settings (404)</NavLink>
        <NavLink to={'/users'}  className={style.item} activeClassName={style.activeLink}>My Friends</NavLink>
    </nav>
}


export default Navbar;
