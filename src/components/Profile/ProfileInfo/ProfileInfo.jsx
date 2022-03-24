import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.profile__wallpaper}>
                <img src="https://images.ru.prom.st/789689695_w640_h640_kirpich-ruchnoj-formovki.jpg" alt=""/>
            </div>
        </div>
    )
}


export default ProfileInfo;
