import React from 'react'
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Message = (props) => {
    return (
        <div className={style.dialogMessage}>{props.message}</div>


    )
}

export default Message;
