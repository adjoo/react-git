import {authAPI, ResultCodeEnum, ResultCodeForCaptchaEnum, securityApi} from "../api/api";
import {stopSubmit} from 'redux-form';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "react";

const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null, //if null, then captcha is not required
}

type InitialStateType = typeof initialState

const authReducer = (state:InitialStateType = initialState, action: ActionsTypes):InitialStateType  => {
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

//SET_USER_DATA
type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email : string | null,
    login: string | null,
    isAuth: boolean,
}
type SetAuthUserDataActionType= {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
const setAuthUserData = (userId: number | null, email : string  | null,
                         login: string  | null, isAuth: boolean): SetAuthUserDataActionType =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

//GET_CAPTCHA_URL_SUCCESS
type GetCaptchaUrlSuccessActionType= {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}
const getCaptchaUrlSuccess = (captchaUrl: string):GetCaptchaUrlSuccessActionType =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});


//нам нужен тип экшена который возвращает экшнкриейтор stopSubmit ( (argType)=>resType )
type stopSubmitType = ReturnType<typeof stopSubmit>
type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType | stopSubmitType

//THUKN's and their required types
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch)  => {
    let authData = await authAPI.getMe()
    if (authData.resultCode === ResultCodeEnum.Success) {
        let {id, login, email} = authData.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string,rememberMe: boolean,captcha: string): ThunkType => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe, captcha)
    if (!response.resultCode) {
        await (getAuthUserData())
    } else{
        if(response.resultCode===ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl())
        }
        let message = (response.messages.length > 0) ? response.messages[0] : 'Common error';
        dispatch(stopSubmit('loginForm', {_error: message}));
    }

}
export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.resultCode = ResultCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const captchaUrlData = await securityApi.getCaptchaUrl()
    const captchaUrl = captchaUrlData.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}


export default authReducer