import React from 'react'
import Profile from "./Profile";
import {withRouter, RouteComponentProps } from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getProfile, getUserStatus, savePhoto, setProfile, updateUserStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

type MapStatePropsType = {
    authorizedUserId: number | null
    profile: ProfileType | null
    status: string
}
type MapDispatchPropsType = {
    getProfile: (profileId: number ) => any
    getUserStatus: (profileId: number) => any
    updateUserStatus: (status: string) => any
    savePhoto: (file: any) => any
    setProfile: (profile: ProfileType) => any
}

type OwnPropsType = {}

type RouterPropsType = {
    userId: number
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & RouteComponentProps<RouterPropsType>

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId : number = this.props.match.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (<Profile isOwner={!this.props.match.params.userId}
                         authorizedUserId={this.props.authorizedUserId}
                         status={this.props.status}
                         savePhoto={this.props.savePhoto}
                         setProfile={this.props.setProfile}
                         updateUserStatus={this.props.updateUserStatus}
                         profile={this.props.profile}

            />
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return ({
        authorizedUserId: state.auth.userId,
        profile: state.profilePage.profile,
        status: state.profilePage.profileStatus,
    })
}

export default compose<React.Component>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {getProfile, getUserStatus, updateUserStatus, savePhoto, setProfile}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)


