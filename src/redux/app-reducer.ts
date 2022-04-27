import {Dispatch} from "react";
import {getAuthUserData} from "./auth-reducer" ;
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const INITIALIZE_SUCCESS = 'INITIALIZE-SUCCESS';
const GLOBAL_ERROR_CATCHED = 'GLOBAL_ERROR_CATCHED';

const initialState = {
    initialized: false,
    globalError: null as Error | null,
}
export type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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
type InitialisedSuccessActionType = { type: typeof INITIALIZE_SUCCESS }
//интерфейс функции  = (var: typeOfInputValue) : typeOfReturnValue => {actions...};
const initializedSuccess = (): InitialisedSuccessActionType => ({type: INITIALIZE_SUCCESS});
//GLOBAL_ERROR_CATCHED
type globalErrorCatchedActionType = { type: typeof GLOBAL_ERROR_CATCHED, globalError: Error | null }
const globalErrorCatched = (globalError: Error | null): globalErrorCatchedActionType =>
    ({type: GLOBAL_ERROR_CATCHED, globalError});

type ActionsTypes = globalErrorCatchedActionType | InitialisedSuccessActionType

//THUKN'S and their required types
type DispatchType = Dispatch<ActionsTypes>
type GetStateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = dispatch(getAuthUserData())
    await Promise.all([promise])
    dispatch(initializedSuccess())

}
export const globalAppError = (promiseRejectionEvent: PromiseRejectionEvent): ThunkType =>
    async (dispatch) => {
        let errorMessage;
        if (promiseRejectionEvent.reason.message) {
            errorMessage = promiseRejectionEvent.reason.message
        } else {
            errorMessage = 'any global error'
        }
        ;
        dispatch(globalErrorCatched(errorMessage))
        setTimeout(() => dispatch(globalErrorCatched(null)), 10000)
    }

export default appReducer