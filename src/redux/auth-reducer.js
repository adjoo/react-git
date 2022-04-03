import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


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
        default:
            return state;

    }
}

export const setAuthUserData = (userId, email , login) => ({type: SET_USER_DATA, data: {userId, email , login}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode) {
                    throw new Error('you are not authorized')
                    }
                dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login))
            })
            .catch((e) => {console.log(e)})
    }
}

export default authReducer