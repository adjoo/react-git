const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
        {id: 1, name: 'Alex',},
        {id: 2, name: 'Artem',},
        {id: 3, name: 'Masha',},
        {id: 4, name: 'Ilya',},
        {id: 5, name: 'Urii',},
    ],
    messagesData: [
        {id: 1, message: 'hi!!!',},
        {id: 2, message: 'Hi? whats up',},
        {id: 3, message: 'Ok? yours&',},
        {id: 4, message: 'nice',},
        {id: 5, message: 'bye',},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newElementId = state.messagesData.length;
            let newMessageText = state.newMessageText;
            let newMessage = {
                id: newElementId,
                message: newMessageText,
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            break
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;

            break
    }
    return state
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (newMessageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText});

export default dialogsReducer