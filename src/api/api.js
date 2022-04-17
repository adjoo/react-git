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
    unFollow(userId){return apiRequest.delete(`/follow/${userId}`)},
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
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file)
        return apiRequest.put(`/profile/photo`, formData,{headers: {
            "Content-Type": 'multipart/form-data'
            }})
    },
    setProfile(profile) {
        return apiRequest.put(`/profile`,profile)
    },
}


export const authAPI = {
    getMe() {
        return apiRequest
            .get("/auth/me")
    },
    logIn(email, password, rememberMe = false,captcha = null){
        return apiRequest
            .post("/auth/login",{email, password, rememberMe,captcha })
    },
    logOut(){
        return apiRequest
            .delete("/auth/login")
    },
}
export const securityApi = {
    getCaptchaUrl(){
        return apiRequest
            .get("/security/get-captcha-url")

    },
}



