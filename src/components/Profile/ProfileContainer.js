import React from 'react'
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getProfile, getUserStatus, savePhoto, updateUserStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    refreshProfile(){
        console.log('refreshProfile')
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {this.props.history.push('/login')}
        };
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
        console.log('componentDidUpdate')

    }
    render() {
        return (<Profile isOwner={!this.props.match.params.userId}
                         authorizedUserId={this.props.authorizedUserId}
                         status={this.props.status}
                         savePhoto={this.props.savePhoto}
                         updateUserStatus={this.props.updateUserStatus}
                         profile={this.props.profile}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return ({
        authorizedUserId: state.auth.userId,
        profile: state.profilePage.profile,
        status: state.profilePage.profileStatus,
    })
}

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus,savePhoto, }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)


