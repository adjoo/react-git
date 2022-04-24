import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    requestUsers, setCurrentPage, unfollow,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getUsers,
    getTotalUsersCount, getIsFetching
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import { AppStateType } from '../../redux/redux-store';
import { compose } from 'redux';


type MapStatePropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    users: Array<UserType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number)=>void
    unfollow: (userId : number)=>void
    follow: (userId : number)=>void
}
type OwnPropsType = {
    pageTitle: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class UsersContainer extends React.Component<PropsType> {
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           followingInProgress={this.props.followingInProgress}
                                                           users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           onPageChanged={this.onPageChanged}/>
            }
        </>
    }

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber : number) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    componentDidUpdate() {

    }
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose<React.Component>(
    connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(mapStateToProps,
        {requestUsers, follow, unfollow}),
    withAuthRedirect)(UsersContainer)

