import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW_SUCCESS = 'USERS-REDUCER/FOLLOW-SUCCESS';
const UNFOLLOW_SUCCESS = 'USERS-REDUCER/UNFOLLOW-SUCCESS';
const SET_USERS = 'USERS-REDUCER/SET-USERS';
const SET_CURRENT_PAGE = 'USERS-REDUCER/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'USERS-REDUCER/SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'USERS-REDUCER/TOGGLES-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'USERS-REDUCER/TOGGLES-FOLLOWING-PROGRESS';


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

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
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }
        default:
            return state;

    }
}

export const followSuccess = (userId) => ({type: FOLLOW_SUCCESS, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_SUCCESS, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});


export const requestUsers = (requestPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await usersAPI.getUsers(requestPage, pageSize)
    dispatch(setUsers(response.items));
    dispatch(setCurrentPage(requestPage));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(toggleFetching(false));
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (!response.data.resultCode) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));

}
export const follow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

}
export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI)
    await followUnfollowFlow(dispatch,userId, apiMethod, unfollowSuccess)

}


export default usersReducer