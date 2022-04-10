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

const setAuthUserData = (userId, email , login) => ({type: SET_USER_DATA, data: {userId, email , login}});
const deleteAuthUserData = () => ({type: DELETE_USER_DATA});

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.getMe()
            .then(response => {
                if (response.data.resultCode) {throw new Error('you are not authorized')}
                dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login))
                getProfile(response.data.data.id);
            })
            .catch((e) => {console.log(e)})
    }
}
export const login = (formData) => {
    return (dispatch) => {
        authAPI.logIn(formData.email, formData.password, formData.rememberMe)
            .then(response => {
                if(!response.data.resultCode){
                    dispatch(getAuthUserData())
                } else {
                    let message = (response.data.messages.length > 0) ? response.data.messages[0] : 'Common error';
                    dispatch(stopSubmit('loginForm',{_error: message}));
                }

            })
            .catch((e) => {console.log(e)})
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logOut()
            .then(response => {
                if(!response.data.resultCode){
                    dispatch(deleteAuthUserData())
                }
            })
            .catch((e) => {console.log(e)})
    }
}


export default authReducer