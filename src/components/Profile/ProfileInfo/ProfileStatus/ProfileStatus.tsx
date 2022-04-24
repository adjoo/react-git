import React, { ChangeEvent } from "react";
import s from "./ProfileStatus.module.css";

type PropsType = {
    status: string
    updateUserStatus: (newStatus: string) => void
}

type StateType= {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status,
    };
    componentDidUpdate(prevProps: PropsType, prevState : StateType){
        console.log(`componentDidUpdate  call${this.props.status}`)
        if(this.props.status !== prevState.status) {
            console.log(`componentDidUpdate if-true ${this.state.status}`)
            this.setState({status: this.props.status})
        }
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
    onStatusChange = (event : ChangeEvent<HTMLInputElement>) => {
        this.setState({status: event.currentTarget.value})
    }
   /* render () {

        return <div onDoubleClick={this.activateEditMode} className={s.profileStatus}>
            <div>this user ID: {this.props.profile.userId}</div>
            {
                (this.props.authorizedUserId === this.props.profile.userId)
                    ? this.state.editMode
                        ? <input autoFocus={true}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                        onBlur={this.deactivateEditMode}/>
                        : <span>{this.state.status || 'no status...'}</span>
                    : <span>{this.state.status}</span>

            }
        </div>
    }*/
    render () {

        return <div  className={s.profileStatus}>
            {this.state.editMode  ? <input autoFocus={true}
                             value={this.state.status}
                             onChange={this.onStatusChange}
                             onBlur={this.deactivateEditMode}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.state.status || 'no status...'}</span>


            }
        </div>
    }
}

export default ProfileStatus