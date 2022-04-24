import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../Assets/Images/user.png';
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType,
    followingInProgress: Array<number>
    follow: (id: number)=>void
    unfollow: (id: number)=>void
}

let User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow,}) => {
    return (<div key={user.id} className={style.userItem}>
            <div>

                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={style.userItem_avatar} alt={"alt"}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed &&
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            className={style.userItem_followBtn}
                            onClick={() => {
                                unfollow(user.id)
                            }}
                    >Unfollow</button>}
                    {!user.followed &&
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            className={style.userItem_followBtn}
                            onClick={() => {
                                follow(user.id)
                            }}
                    >Follow</button>}

                </div>
            </div>
            <div className={style.userItem_main}>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{'user.location.city'}</div>
                <div>{'user.location.country'}</div>
            </div>
        </div>
    )
}

export default User;