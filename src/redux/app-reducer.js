import {getAuthUserData} from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE-SUCCESS';
const GLOBAL_ERROR_CATCHED = 'GLOBAL_ERROR_CATCHED';

const initialState = {
    initialized: false,
    globalError: null,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case GLOBAL_ERROR_CATCHED:
            return {
                ...state,
                globalError: action.globalError,
            }

        default:
            return state;

    }
}

const initializedSuccess = () => ({type: INITIALIZE_SUCCESS,});
const globalErrorCatched = (globalError) => ({type: GLOBAL_ERROR_CATCHED, globalError});


export const initializeApp = () => async (dispatch) => {
    let promise = dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(initializedSuccess())

}
export const globalAppError = (promiseRejectionEvent) => async (dispatch) => {
    let errorMessage;
    if(promiseRejectionEvent.reason.message) {
        errorMessage = promiseRejectionEvent.reason.message
    } else {
        errorMessage = 'any global error'
    };
    dispatch(globalErrorCatched(errorMessage))
    //await new Promise((resolve, reject)=>{setTimeout(()=>resolve(),10000)}) //wait 10sec then close error
    setTimeout(()=>dispatch(globalErrorCatched(null)),10000)
}

export default appReducer