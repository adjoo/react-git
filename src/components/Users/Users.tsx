import React from 'react';
import { UserType } from '../../types/types';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId : number)=>void
    follow: (userId : number)=>void
}

let Users: React.FC<PropsType> = ({currentPage, totalUsersCount,
                 pageSize, onPageChanged, users,
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
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} />

            {users.map(u => <User user={u} follow={props.follow}
                                  unfollow={props.unfollow}
                                  followingInProgress={props.followingInProgress}/>)}
        </div>
    )
}

export default Users;