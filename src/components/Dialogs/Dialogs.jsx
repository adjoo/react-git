import React from 'react'
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let newMessageText = React.createRef()
    let newPostText = props.newMessageText

    let onSendMessage = () => {
        props.sendMessage()
    };
    let onMessageTextChange = () => {
        let text = newMessageText.current.value;
        props.messageTextChange(text)
    };

    let dialogs = props.dialogs.map((el) => {
        return <DialogItem name={el.name} path={`dialogs/${el.id}`}/>
    })
    let messages = props.messages.map((el) => {
        return <Message message={el.message}/>
    })

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