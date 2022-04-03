import React from 'react'
import Profile from "./Profile";
import {withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {setUserProfile, getProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.getProfile(this.props.match.params.userId)
    }
    componentDidUpdate(){

    }
    render() {
        return (<Profile {...this.props}
                         profile={this.props.profile}
            />
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


export default connect(mapStateToProps, {getProfile,})(withRouter(ProfileContainer))

