//не удалять
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _callSubscriber() {
        console.log('empty rerender called')
    },
    _state: {
        dialogsPage: {
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
        },
        postsPage: {
            postsData: [
                {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
                {id: 2, message: 'Its me second post', likesCount: 11,},
                {id: 3, message: 'This is last post', likesCount: 2,},
            ],
            newPostText: "new post",
        }
    },
    getState() {
        return this._state;
    },


    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action){
        this._state.postsPage = profileReducer(this._state.postsPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    },


}
export default store
window.store = store;