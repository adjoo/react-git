import React, {ChangeEvent, useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";

type PropsType = {
    status: string
    updateUserStatus: (newStatus: string) => void
}

type StateType= {

}

const ProfileStatusWithHooks : React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
        setStatus(props.status) // after calling thunk and before updating props
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.profileStatus}>
            {!editMode && <span onDoubleClick={activateEditMode}>{status || 'no status...'} </span>}
            {editMode && <input value={status} autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}/>}
        </div>
    )
}

export default ProfileStatusWithHooks