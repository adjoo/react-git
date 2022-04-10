import React from 'react'
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {this.props.history.push('/login')}
        };
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate() {

    }

    render() {
        return (<Profile myUserId={this.props.myUserId} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}
                         profile={this.props.profile}
            />
        )
    }

}


let mapStateToProps = (state) => ({
    authorizedUserId: state.auth.userId,
    profile: state.profilePage.profile,
    status: state.profilePage.profileStatus,
})

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus,}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)


