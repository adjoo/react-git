import React from "react";
import s from "./ProfileStatus.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    componentDidUpdate(prevProps, prevState){
        if(this.props.status !== prevState.status) {this.setState({status: this.props.status})}

    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    };
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    render () {
        return <div onDoubleClick={this.activateEditMode} className={s.profileStatus}>
            <div>this user ID: {this.props.profile.userId}</div>
            {
                (this.props.myUserId === this.props.profile.userId)
                    ? this.state.editMode
                        ? <input autoFocus={true}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                        onBlur={this.deactivateEditMode}/>
                        : <span>{this.state.status || 'no status...'}</span>
                    : <span>{this.state.status}</span>

            }
        </div>
    }
}

export default ProfileStatus