import React from 'react'
import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

export default compose(
    connect(mapStateToProps,{sendMessage}),
    withAuthRedirect,
)(Dialogs)

