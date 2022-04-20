import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from 'redux-form';

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

const authReducer = (state:InitialStateType = initialState, action: any):InitialStateType  => {
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


//THUKN'S
export const getAuthUserData = (): any => async (dispatch: any)  => {
    let response = await authAPI.getMe()
    if (!response.data.resultCode) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string,rememberMe: boolean,captcha: string) => async (dispatch: any) => {
    let response = await authAPI.logIn(email, password, rememberMe, captcha)
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
export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logOut()
    if (!response.resultCode) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}


export default authReducer