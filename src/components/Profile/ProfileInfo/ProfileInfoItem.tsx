import React, {useState,} from 'react'
import style from "./ProfileInfo.module.css";

type PropsType = {
    title: string
    value: string
}

const ProfileInfoItem : React.FC<PropsType> = ({title, value}) => {
    return (<div className={style.profileInfoItem}>
        <div><b>{title}{"\u00A0: "}</b></div>
        {value}
    </div>)
}

export default ProfileInfoItem;
