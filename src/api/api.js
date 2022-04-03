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

    getUsers(currentPage = 1, pageSize = 10){
        return apiRequest.get(`/users/?count=${pageSize}&page=${currentPage}`)
            .catch((e)=>{console.log(e)})
            .then(response => response.data);
    },
    toggleFollowing(userId, newFollowingStatus = false){
        if (newFollowingStatus){
            return apiRequest.delete(`/follow/${userId}`)
                .catch((e)=>{console.log(e)})
        }else {
            return apiRequest.post(`/follow/${userId}`)
                .catch((e)=>{console.log(e)})
        }
    }
}


export const profileAPI = {
    getProfile(userId){
        return apiRequest.get(`/profile/${userId}`).catch((e) => {console.log(e)})
    }
}


export const authAPI = {
    me(){
        return apiRequest
            .get( "/auth/me")
            .catch((e) => {console.log(e)} )
    },
}




