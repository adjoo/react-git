import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount,
                 pageSize, pageChanged, users,
                 ...props}) => {

    let pagesCount = totalUsersCount / pageSize
    pagesCount = pagesCount > 9 ? 9 : pagesCount;
    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i)
    }


    return (
        <div>
            <Paginator currentPage={currentPage}
                       pageSize={pageSize}
                       pageChanged={pageChanged}
                       totalItemsCount={totalUsersCount} />

            {users.map(u => <User user={u} follow={props.follow}
                                  unfollow={props.unfollow}
                                  followingInProgress={props.followingInProgress}/>)}
        </div>
    )
}

export default Users;