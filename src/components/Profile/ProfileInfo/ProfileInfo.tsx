import React, {ChangeEvent, useState,} from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/user.png"
import ProfileDataForm from "./ProfileDataForm";
import ProfileInfoItem from "./ProfileInfoItem";
import {ProfileType} from "../../../types/types";

type PropsType = {
    isOwner: boolean
    authorizedUserId: number | null
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => any
    savePhoto: (file: any) => any
    setProfile: (profile: ProfileType) => any
}

const ProfileInfo: React.FC<PropsType> = ({
                                              profile, status, authorizedUserId,
                                              updateUserStatus, isOwner, savePhoto, setProfile, ...props
                                          }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files) {
            return
        }
        savePhoto(e.target.files[0])
    }
    const onSubmitEditProfile = (formData:any):void => {
        setProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <ProfileStatusWithHooks status={status}
                                    updateUserStatus={updateUserStatus}/>

            <div className={style.profileWallpaper}>
                <div className={style.mainPhoto}>
                    <img src={profile.photos.large || userPhoto}

                         alt="alt"/>
                </div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>

            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile}
                                   onSubmit={onSubmitEditProfile}
                />
                : <ProfileData profile={profile}
                               onEditModeProfile={() => {
                                   setEditMode(true)
                               }}
                               isOwner={isOwner}
                />}

        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    onEditModeProfile: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, ...props}) => {
    return <div className={style.profileOptions}>
        <ProfileInfoItem key={'fullName'} title={"Full Name"} value={profile.fullName}/>
        <ProfileInfoItem key={'lookingForAJob'} title={"Looking for a job"}
                         value={profile.lookingForAJob ? 'yes' : 'no'}/>
        <ProfileInfoItem key={'lookingForAJobDescription'} title={"My professional skills"}
                         value={profile.lookingForAJobDescription}/>
        <ProfileInfoItem key={'aboutMe'} title={"About me"} value={profile.aboutMe}/>
        {Object.keys(profile.contacts).map(key => {
            return <ProfileInfoItem key={key} title={key} value={profile.contacts[key]}/>
        })}{isOwner && <div>
        <button onClick={props.onEditModeProfile}>edit</button>
    </div>}
    </div>
}

export default ProfileInfo;
