import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE= 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT= 'SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING= 'TOGGLES-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS= 'TOGGLES-FOLLOWING-PROGRESS';



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
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) return {
                        ...u,
                        followed: !u.followed,
                    }
                    return u
                })
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
                    : [state.followingInProgress.filter(id=>id!=action.userId)]
            }
        }
        default:
            return state;

    }
}

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});



export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setUsers(response.items));
                dispatch(setCurrentPage(currentPage));
                dispatch(setTotalUsersCount(response.totalCount));
                dispatch(toggleFetching(false));
            });

        }
    }
export const toggleUserFollowing = (userId, newFollowingStatus)=>{
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.toggleFollowing(userId, newFollowingStatus)
            .then((response) => {
                if (!response.data.resultCode) {dispatch(toggleFollow(userId));}
                dispatch(toggleFollowingProgress(false, userId)) }
                );
        };
}


export default usersReducer