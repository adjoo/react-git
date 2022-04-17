import React, {useState,} from 'react'
import style from "./ProfileInfo.module.css";

const ProfileInfoItem = ({title, value}) => {
    return (<div className={style.profileInfoItem}>
        <div><b>{title}{"\u00A0: "}</b></div>
        {value}
    </div>)
}

export default ProfileInfoItem;
