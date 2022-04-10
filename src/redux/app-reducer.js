import {getAuthUserData} from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE-SUCCESS';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;

    }
}

const initializedSuccess = () => ({type: INITIALIZE_SUCCESS, });


export const initializeApp = () => {
    return async (dispatch) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise]).then(
            ()=>{dispatch(initializedSuccess())}
        )
    }
}

export default appReducer