import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
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
    getTotalUsersCount
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           followingInProgress={this.props.followingInProgress}
                                                           users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           pageChanged={this.onPageChanged}/>
            }
        </>
    }

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    componentDidUpdate() {

    }
}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
let actionCreators = {
    setCurrentPage, requestUsers, follow, unfollow
}

export default compose(
    connect(mapStateToProps, actionCreators),
    withAuthRedirect,
)(UsersContainer)

