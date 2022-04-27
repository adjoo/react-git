import {profileAPI, ResultCodeEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosOfProfileType, PostItem, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

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

//Actions and their types
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

//THUKN'S and their required types
type StopSubmitType = ReturnType<typeof stopSubmit>
type ActionsTypes = AddPostActionType | DeletePostActionType | SetUserProfileActionType
    | SetStatusActionType | SavePhotoSuccessActionType | StopSubmitType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getProfile = (profileId: number): ThunkType => async (dispatch) => {
    const profile = await profileAPI.getProfile(profileId)
    dispatch(setUserProfile(profile));

}
export const getUserStatus = (profileId: number): ThunkType => async (dispatch) => {
    const profileStatus = await profileAPI.getStatus(profileId)
    dispatch(setStatus(profileStatus))

}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status)
        if (res.resultCode===ResultCodeEnum.Success) {
            dispatch(setStatus(status))
        }
    } catch (error: any) {
        throw new Error(error)
    }

}
export const savePhoto = (file: number): ThunkType => async (dispatch) => {
    const res = await profileAPI.savePhoto(file)
    debugger
    if (res.resultCode===ResultCodeEnum.Success) {
        dispatch(savePhotoSuccess(res.data))
    }
}
export const setProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    if (userId) {
        const res = await profileAPI.setProfile(profile)
        if (res.resultCode === ResultCodeEnum.Success) {
            await dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('editProfile', {"contacts": {"facebook": res.messages[0]}}))
            return Promise.reject(res.messages[0]);
        }
    }
}

export default profileReducer