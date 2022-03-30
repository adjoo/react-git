import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.profile__wallpaper}>
                <img src={props.profile.photos.large} alt="alt"/>
            </div>
        </div>
    )

}


export default ProfileInfo;
