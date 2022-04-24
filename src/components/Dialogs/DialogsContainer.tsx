import React from 'react'
import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {DialogsItemType, MessagesItemType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogs:  Array<DialogsItemType>
    messages: Array<MessagesItemType>
    newMessageText: string
}
type MapDispatchToPropsType = {
    sendMessage: (newMessage: string)=>void
}


const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.message,
    }
};

export default compose<React.Component>(
    connect<MapStateToPropsType,MapDispatchToPropsType,{},AppStateType>(mapStateToProps,{sendMessage}),
    withAuthRedirect,
)(Dialogs)

