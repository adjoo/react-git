import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../Assets/Images/user.png';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let User = ({user, followingInProgress, follow, unfollow, ...props}) => {
    return (<div key={user.id} className={style.userItem}>
            <div>

                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={style.userItem_avatar}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed &&
                    <button disabled={followingInProgress.some(id => id == user.id) ? "disabled" : null}
                            className={style.userItem_followBtn}
                            onClick={() => {
                                unfollow(user.id)
                            }}
                    >Unfollow</button>}
                    {!user.followed &&
                    <button disabled={followingInProgress.some(id => id == user.id) ? "disabled" : null}
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