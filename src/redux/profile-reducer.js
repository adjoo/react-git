import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    postsData: [
        {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
        {id: 2, message: 'Its me second post', likesCount: 11,},
        {id: 3, message: 'This is last post', likesCount: 2,},
    ],
    newPostText: "",
    profile: null,
    profileStatus: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: state.postsData.length,
                    message: action.newPostText,
                    likesCount: 0,
                }],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                profileStatus: action.status,
            }
        case DELETE_POST:
            return {
                ...state, postsData: state.postsData.filter(p => p.id !== action.postId),
            }
        default:
            return state;

    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (profileId) => async (dispatch) => {
    let response = await profileAPI.getProfile(profileId)
    dispatch(setUserProfile(response.data));

}
export const getUserStatus = (profileId) => async (dispatch) => {
    let response = await profileAPI.getStatus(profileId)

    if (!response.resultCode) {
        dispatch(setStatus(response.data))
    }

}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (!response.data.resultCode) {
        dispatch(setStatus(status))

    }
}
export default profileReducer