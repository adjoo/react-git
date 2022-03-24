import React from 'react'
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={style.root}>
            <ProfileInfo/>
            <MyPosts posts={props.postsPage.postsData}
                     newPostText={props.postsPage.newPostText}
                     dispatch={props.dispatch}
            />

        </div>
    )
}


export default Profile;
