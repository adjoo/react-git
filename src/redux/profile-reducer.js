const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [
        {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
        {id: 2, message: 'Its me second post', likesCount: 11,},
        {id: 3, message: 'This is last post', likesCount: 2,},
    ],
    newPostText: "new post",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newElementId = state.postsData.length;
            let newPostMessage = state.newPostText;
            let newPost = {
                id: newElementId,
                message: newPostMessage,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            break
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            break
    }
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText});

export default profileReducer