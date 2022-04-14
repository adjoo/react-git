import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
};

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter (m => true)
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};3
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};



