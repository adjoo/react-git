import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile,status,authorizedUserId,updateUserStatus,...props}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileStatusWithHooks authorizedUserId={authorizedUserId} profile={profile} status={status}
                           updateUserStatus={updateUserStatus}/>
            <div className={style.profile__wallpaper}>
                <img src={profile.photos.large} alt="alt"/>
            </div>
        </div>
    )

}


export default ProfileInfo;
