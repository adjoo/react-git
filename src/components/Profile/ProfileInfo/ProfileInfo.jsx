import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileStatus myUserId={props.myUserId} profile={props.profile} status={props.status}
                           updateUserStatus={props.updateUserStatus}/>
            <div className={style.profile__wallpaper}>
                <img src={props.profile.photos.large} alt="alt"/>
            </div>
        </div>
    )

}


export default ProfileInfo;
