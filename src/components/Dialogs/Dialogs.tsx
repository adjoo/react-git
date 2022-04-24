import React from 'react'
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import SendMessageForm from "./SendMessageForm";
import {DialogsItemType, MessagesItemType} from "../../types/types";


type PropsType = {
    dialogs:  Array<DialogsItemType>
    messages: Array<MessagesItemType>
    newMessageText: string
    sendMessage: (newMessage: string)=>void
}
const Dialogs : React.FC<PropsType> = (props) => {

    let dialogs = props.dialogs.map((el) => {
        return <DialogItem name={el.name} path={`dialogs/${el.id}`}/>
    })
    let messages = props.messages.map((el) => {
        return <Message message={el.message}/>
    })

    let addNewMessage = (values: any) => {
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