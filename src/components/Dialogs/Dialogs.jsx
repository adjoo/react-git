import React from 'react'
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let newMessageText = React.createRef()
    let newPostText = props.dialogsPage.newMessageText

    let onSendMessage = () => {props.dispatch(sendMessageActionCreator())};
    let onMessageTextChange = () => {
        let text = newMessageText.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    };

    let dialogs = props.dialogsPage.dialogsData.map((el) => {return <DialogItem name = {el.name} path = {`dialogs/${el.id}`} /> } )
    let messages = props.dialogsPage.messagesData.map((el) => {return <Message message = {el.message} /> } )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogs}</div>
            <div className={s.dialogMessagesWrapper}>{messages}

            </div>

            <div className={s.textdiareaWr}>
                    <textarea ref={newMessageText} onChange={onMessageTextChange} value={newPostText}></textarea>
                    <button onClick={onSendMessage}>send</button>
            </div>

        </div>
    )
}

export default Dialogs