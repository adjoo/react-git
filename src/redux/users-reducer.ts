import {usersAPI} from "../api/api";
import {UserType} from "../types/types";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW_SUCCESS = 'USERS-REDUCER/FOLLOW-SUCCESS';
const UNFOLLOW_SUCCESS = 'USERS-REDUCER/UNFOLLOW-SUCCESS';
const SET_USERS = 'USERS-REDUCER/SET-USERS';
const SET_CURRENT_PAGE = 'USERS-REDUCER/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'USERS-REDUCER/SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'USERS-REDUCER/TOGGLES-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'USERS-REDUCER/TOGGLES-FOLLOWING-PROGRESS';


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of user IDs
}
type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS: {

            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;

    }
}

type FollowSuccessActionType = {
    type: typeof FOLLOW_SUCCESS,
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW_SUCCESS, userId});

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW_SUCCESS
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW_SUCCESS, userId});

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    count
});

type ToggleFetchingActionType = {
    type: typeof TOGGLE_FETCHING
    isFetching: boolean
}
export const toggleFetching = (isFetching: boolean): ToggleFetchingActionType => ({type: TOGGLE_FETCHING, isFetching});

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

//THUKN'S
export const requestUsers = (requestPage: number, pageSize: number): any => async (dispatch: any) => {
    dispatch(toggleFetching(true));
    let response = await usersAPI.getUsers(requestPage, pageSize)
    dispatch(setUsers(response.items));
    dispatch(setCurrentPage(requestPage));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(toggleFetching(false));
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (!response.data.resultCode) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));

}

export const follow = (userId: number) => async (dispatch: any) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

}

export const unfollow = (userId: number) => async (dispatch: any) => {
    let apiMethod = usersAPI.unFollow.bind(usersAPI)
    await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)

}

export default usersReducer