import {authAPI} from "../api/api";
import {getProfile} from "./profile-reducer";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';
const DELETE_USER_DATA = 'DELETE-USER-DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case DELETE_USER_DATA:
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false,
            }

        default:
            return state;

    }
}

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
const deleteAuthUserData = () => ({type: DELETE_USER_DATA});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getMe()
    if (!response.data.resultCode) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login))
    }
}
export const login = (formData) => async (dispatch) => {
    let response = await authAPI.logIn(formData.email, formData.password, formData.rememberMe)
    if (!response.data.resultCode) {
        dispatch(getAuthUserData())
    } else {
        let message = (response.data.messages.length > 0) ? response.data.messages[0] : 'Common error';
        dispatch(stopSubmit('loginForm', {_error: message}));
    }

}
export const logout = () => async (dispatch) => {
    let response = authAPI.logOut()

    if (!response.resultCode) {
        dispatch(deleteAuthUserData())
    }

}


export default authReducer