import React, {useState,} from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../Assets/Images/user.png"
import ProfileDataForm from "./ProfileDataForm";
import ProfileInfoItem from "./ProfileInfoItem";

const ProfileInfo = ({profile, status, authorizedUserId, updateUserStatus, isOwner, savePhoto, setProfile, ...props}) => {

    let [editMode,setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmitEditProfile = (formData) => {
        setProfile(formData).then(
            ()=>{setEditMode(false)}
            )
    }

    return (
        <div>
            <ProfileStatusWithHooks authorizedUserId={authorizedUserId}
                                    profile={profile}
                                    status={status}
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
                               onEditModeProfile={()=>{setEditMode(true)}}
                               isOwner={isOwner}
                              />}

        </div>
    )
}

const ProfileData = ({profile, isOwner, ...props}) => {
    return <div className={style.profileOptions}>

        <ProfileInfoItem key={'fullName'} title={"Full Name"} value={profile.fullName}/>
        <ProfileInfoItem key={'lookingForAJob'} title={"Looking for a job"} value={profile.lookingForAJob ? 'yes' : 'no'}/>
        <ProfileInfoItem key={'lookingForAJobDescription'} title={"My professional skills"} value={profile.lookingForAJobDescription}/>
        <ProfileInfoItem key={'aboutMe'} title={"About me"} value={profile.aboutMe}/>
        {Object.keys(profile.contacts).map(key => {
            return <ProfileInfoItem key={key} title={key} value={profile.contacts[key]}/>
        })}{isOwner && <div><button onClick={props.onEditModeProfile}>edit</button></div>}
    </div>
}

export default ProfileInfo;
