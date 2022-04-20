import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosOfProfileType, PostItem, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTOS_SUCCESS = 'SAVE-PHOTOS-SUCCESS';


const initialState = {
    postsData: [
        {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
        {id: 2, message: 'Its me second post', likesCount: 11,},
        {id: 3, message: 'This is last post', likesCount: 2,},
    ] as Array<PostItem>,
    newPostText: "" as string,
    profile: null as ProfileType | null,
    profileStatus: "" as string,
}
type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        case SAVE_PHOTOS_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType, //плохое приведение, уберём позже
            }
        default:
            return state;

    }
}


type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string):SetStatusActionType => ({type: SET_STATUS, status});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTOS_SUCCESS
    photos: PhotosOfProfileType
}
const savePhotoSuccess = (photos:PhotosOfProfileType):SavePhotoSuccessActionType => ({type: SAVE_PHOTOS_SUCCESS, photos});

//THUKN'S
export const getProfile = (profileId: number): any => async (dispatch: any) => {
    let response = await profileAPI.getProfile(profileId)
    dispatch(setUserProfile(response.data));

}
export const getUserStatus = (profileId: number): any => async (dispatch: any) => {
    let response = await profileAPI.getStatus(profileId)
    if (!response.resultCode) {
        dispatch(setStatus(response.data))
    }

}
export const updateUserStatus = (status: string): any => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (!response.data.resultCode) {
            dispatch(setStatus(status))
        }
    } catch (error: any) {
        throw new Error(error)
    }

}
export const savePhoto = (file: any): any => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    debugger
    if (!response.data.resultCode) {
        //нужно обновить фото
        debugger
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const setProfile = (profile: ProfileType): any => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.setProfile(profile)
    if (!response.data.resultCode) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', {"contacts": {"facebook": response.data.messages[0]}}))
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer