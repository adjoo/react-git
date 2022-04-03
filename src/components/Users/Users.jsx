import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../Assets/Images/user.png';
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = props.totalUsersCount / props.pageSize
    pagesCount = pagesCount > 9 ? 9 : pagesCount;
    let currentPage = props.currentPage
    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div className={style.pagination}>
                {pages.map((i) => {
                    return <span className={currentPage === i && style.active}
                                 onClick={() => {
                                     props.pageChanged(i)
                                 }}>{i}</span>
                })}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={style.userItem}>
                    <div>

                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={style.userItem_avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            <button disabled={props.followingInProgress.some(id => id==u.id) ?  "disabled" : null}
                                    className={style.userItem_followBtn}
                                    onClick={()=>{props.toggleUserFollowing(u.id,u.followed)}}
                                >{u.followed ? "Unfollow" : "follow"}
                            </button>

                         </div>
                    </div>
                    <div className={style.userItem_main}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                    </div>
                    <div>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Users;