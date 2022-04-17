import React from 'react'
import style from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={style.root}>
            <ProfileInfo isOwner={props.isOwner} authorizedUserId={props.authorizedUserId} profile={props.profile} status={props.status}
                         updateUserStatus={props.updateUserStatus} savePhoto={props.savePhoto} setProfile={props.setProfile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;
