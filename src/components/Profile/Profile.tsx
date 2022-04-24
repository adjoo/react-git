import React from 'react'
import style from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types/types";

type PropsType = {
    isOwner: boolean
    authorizedUserId: number | null
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => any
    savePhoto: (file: any) => any
    setProfile: (profile: ProfileType) => any
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={style.root}>
            <ProfileInfo isOwner={props.isOwner}
                         authorizedUserId={props.authorizedUserId}
                         profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         savePhoto={props.savePhoto}
                         setProfile={props.setProfile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;
