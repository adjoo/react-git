import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage, setTotalUsersCount, setUsers,
    toggleFetching, toggleFollow,
} from '../../redux/users-reducer';
import * as axios from 'axios'
import Users from './Users';
import Preloader from "../common/Preloader";

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'

class UsersContainer extends React.Component {
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true);
        axios.get(BASE_URL + "/users" + this.setURLQueryParameters(pageNumber, this.props.pageSize))
            .then(response => {
                this.props.setUsers(response.data.items);
                setTimeout(() => {
                    this.props.toggleFetching(false);
                }, 300)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users store={this.props}
                                                           totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           users={this.props.users}
                                                           toggleFollow={this.props.toggleFollow}
                                                           pageChanged={this.onPageChanged}/>
            }
        </>
    }

    setURLQueryParameters = (page, сount) => {
        сount = сount || this.props.pageSize;
        page = page || this.props.currentPage;
        let queryString = `?count=${сount}&page=${page}`;
        return queryString
    }

    componentDidMount() {
        axios.get(BASE_URL + "/users" + this.setURLQueryParameters())
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            )
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
        isFetching: state.usersPage.isFetching,
    }
}
let actionCreators = {
    toggleFollow: toggleFollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    toggleFetching: toggleFetching,
}

export default connect(mapStateToProps, actionCreators)(UsersContainer);