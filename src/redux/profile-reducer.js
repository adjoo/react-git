import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    postsData: [
        {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
        {id: 2, message: 'Its me second post', likesCount: 11,},
        {id: 3, message: 'This is last post', likesCount: 2,},
    ],
    newPostText: "new post",
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: state.postsData.length,
                    message: state.newPostText, likesCount: 0
                }],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfile = (profileId = 2) => {
    return (dispatch) => {
        profileAPI.getProfile(profileId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export default profileReducer