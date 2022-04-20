import {getAuthUserData} from "./auth-reducer" ;

const INITIALIZE_SUCCESS = 'INITIALIZE-SUCCESS';
const GLOBAL_ERROR_CATCHED = 'GLOBAL_ERROR_CATCHED';

const initialState = {
    initialized: false ,
    globalError: null as string | null,
}
export type InitialStateType = typeof initialState

const appReducer = (state:InitialStateType = initialState, action : any):InitialStateType => {
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

//INITIALIZE_SUCCESS
//взять тип в котором может быть только само значение строки
type InitialisedSuccessActionType = {type: typeof INITIALIZE_SUCCESS}
//интерфейс функции  = (var: typeOfInputValue) : typeOfReturnValue => {actions...};
const initializedSuccess = (): InitialisedSuccessActionType => ({type: INITIALIZE_SUCCESS});
//GLOBAL_ERROR_CATCHED
const globalErrorCatched = (globalError: any) => ({type: GLOBAL_ERROR_CATCHED, globalError});

//THUKN'S
export const initializeApp = () => async (dispatch : any) => {
    let promise = dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(initializedSuccess())

}
export const globalAppError = (promiseRejectionEvent : any) => async (dispatch : any) => {
    let errorMessage;
    if(promiseRejectionEvent.reason.message) {
        errorMessage = promiseRejectionEvent.reason.message
    } else {
        errorMessage = 'any global error'
    };
    dispatch(globalErrorCatched(errorMessage))
    setTimeout(()=>dispatch(globalErrorCatched(null)),10000)
}

export default appReducer