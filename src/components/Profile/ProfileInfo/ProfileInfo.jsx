import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/user.png"

const ProfileInfo = ({profile, status, authorizedUserId, updateUserStatus, isOwner, savePhoto, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <ProfileStatusWithHooks authorizedUserId={authorizedUserId}
                                    profile={profile}
                                    status={status}
                                    updateUserStatus={updateUserStatus}/>

            <div className={style.profileWallpaper}>
                <img src={profile.photos.large || userPhoto}
                     className={style.mainPhoto}
                     alt="alt"/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>

            {isOwner ? <ProfileDataForm profile={profile} /> : <ProfileData profile={profile} />}

        </div>
    )
}

const ProfileData = ({profile, ...props}) => {
    return <div className={style.profileOptions}>
        <ProfileInfoItem title={"Full Name"} value={profile.fullName}/>
        <ProfileInfoItem title={"Looking for a job"} value={profile.lookingForAJob ? 'yes' : 'no'}/>
        <ProfileInfoItem title={"My professional skills"} value={profile.lookingForAJobDescription}/>
        <ProfileInfoItem title={"About me"} value={profile.aboutMe}/>
        {Object.keys(profile.contacts).map(key => {
            return <ProfileInfoItem key={key} title={key} value={profile.contacts[key]}/>
        })}
    </div>
}
const ProfileDataForm = ({profile, ...props}) => {
    return <div className={style.profileOptions}>
        <ProfileInfoItem title={"Full Name"} value={profile.fullName}/>
        <ProfileInfoItem title={"Looking for a job"} value={profile.lookingForAJob ? 'yes' : 'no'}/>
        <ProfileInfoItem title={"My professional skills"} value={profile.lookingForAJobDescription}/>
        <ProfileInfoItem title={"About me"} value={profile.aboutMe}/>
        {Object.keys(profile.contacts).map(key => {
            return <ProfileInfoItem key={key} title={key} value={profile.contacts[key]}/>
        })}
    </div>
}

const ProfileInfoItem = ({title, value}) => {
    return <div><b>{title} : </b>{value}</div>
}

export default ProfileInfo;
