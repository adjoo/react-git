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
            .catch((e) => {
                console.log(e)
            })
            .then(response => response.data);
    },
    toggleFollowing(userId, newFollowingStatus = false) {
        if (newFollowingStatus) {
            return apiRequest.delete(`/follow/${userId}`)
                .catch((e) => {
                    console.log(e)
                })
        } else {
            return apiRequest.post(`/follow/${userId}`)
                .catch((e) => {
                    console.log(e)
                })
        }
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId) {
        return apiRequest.get(`/profile/${userId}`).catch((e) => {
            console.log(e)
        })
    },
    getStatus(userId) {
        userId = userId || '';
        return apiRequest.get(`/profile/status/${userId}`).catch((e) => {
            console.log(e)
        })
    },
    updateStatus(status) {
        status = status || '';
        return apiRequest.put(`/profile/status`, {status: status}).catch((e) => {
            console.log(e)
        })
    }
}


export const authAPI = {
    getMe() {
        return apiRequest
            .get("/auth/me")
            .catch((e) => {
                console.log(e)
            })
    },
    logIn(email, password, rememberMe = false){
        return apiRequest
            .post("/auth/login",{email, password, rememberMe })
            .catch((e) => {
                console.log(e)
            })
    },
    logOut(){
        return apiRequest
            .delete("/auth/login")
            .catch((e) => {
                console.log(e)
            })
    },
}




