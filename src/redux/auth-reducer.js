import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, //if null, then captcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
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
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;

    }
}

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, payload: {userId, email, login}});
const deleteAuthUserData = () => ({type: DELETE_USER_DATA});
const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getMe()
    if (!response.data.resultCode) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login))
    }
}
export const login = (formData) => async (dispatch) => {
    let response = await authAPI.logIn(formData.email, formData.password, formData.rememberMe, formData.captcha)
    if (!response.data.resultCode) {
        dispatch(getAuthUserData())
    } else{
        if(response.data.resultCode===10) {
            dispatch(getCaptchaUrl())
        }
        let message = (response.data.messages.length > 0) ? response.data.messages[0] : 'Common error';
        dispatch(stopSubmit('loginForm', {_error: message}));
    }

}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (!response.resultCode) {
        dispatch(deleteAuthUserData())
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}


export default authReducer