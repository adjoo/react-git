import React from 'react'
import Profile from "./Profile";
import {connect} from 'react-redux';
import * as axios from 'axios'
import {setUserProfile} from "../../redux/profile-reducer";

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'


class ProfileContainer extends React.Component {
    componentDidMount(){

        axios.get(BASE_URL + "/profile" + this.setURIQueryParameters(this.props.profile))
            .catch((e)=>{console.log(e)})
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile} />
        )
    }
    setURIQueryParameters = (userId) => {
        userId = userId || 2;
        let uriString = `/${userId}`;
        return uriString
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUserProfile,})(ProfileContainer)

