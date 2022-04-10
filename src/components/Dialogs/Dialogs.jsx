import React from 'react'
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import SendMessageForm from "./SendMessageForm";


const Dialogs = (props) => {


    let dialogs = props.dialogs.map((el) => {
        return <DialogItem name={el.name} path={`dialogs/${el.id}`}/>
    })
    let messages = props.messages.map((el) => {
        return <Message message={el.message}/>
    })

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogs}</div>
            <div className={s.dialogMessagesWrapper}>{messages}

            </div>
            <SendMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs