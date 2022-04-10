const SEND_MESSAGE = 'SEND-MESSAGE';

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
    message: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: state.messagesData.length, message: action.message}],
                message: '',
            }

        default:
            return state
    }

}

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});

export default dialogsReducer