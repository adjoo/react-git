import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
    getUsers, setCurrentPage, toggleUserFollowing,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           followingInProgress={this.props.followingInProgress}
                                                           users={this.props.users}
                                                           toggleUserFollowing={this.props.toggleUserFollowing}
                                                           pageChanged={this.onPageChanged}/>
            }
        </>
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    componentDidUpdate() {

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
let actionCreators = {
    setCurrentPage, getUsers, toggleUserFollowing
}

export default compose(
    connect(mapStateToProps, actionCreators),
    withAuthRedirect,
)(UsersContainer)

