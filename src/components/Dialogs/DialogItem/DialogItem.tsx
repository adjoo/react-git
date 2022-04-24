import React from 'react'
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    path: string
    name: string
}

const DialogItem : React.FC<PropsType> = (props) => {
    return (
        <NavLink to={props.path}
                 className={style.dialogItem}
                 activeClassName={style.dialogActiveItem}>{props.name}</NavLink>
    )
}

export default DialogItem;
