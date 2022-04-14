import * as axios from 'axios'


const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'
const ACCESS_KEY = '6aa9dc35-6dc6-4f19-b0ef-aca7ffdb5bc7'

const apiRequest = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        "API-KEY": ACCESS_KEY
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return apiRequest.get(`/users/?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    },
    follow(userId){
        return apiRequest.post(`/follow/${userId}`)},
    unfollow(userId){return apiRequest.delete(`/follow/${userId}`)},
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId) {
        return apiRequest.get(`/profile/${userId}`)
    },
    getStatus(userId) {
        userId = userId || '';
        return apiRequest.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        status = status || '';
        return apiRequest.put(`/profile/status`, {status: status})
    }
}


export const authAPI = {
    getMe() {
        return apiRequest
            .get("/auth/me")
    },
    logIn(email, password, rememberMe = false){
        return apiRequest
            .post("/auth/login",{email, password, rememberMe })
    },
    logOut(){
        return apiRequest
            .delete("/auth/login")
    },
}




