import axios from 'axios'
import {PhotosOfProfileType, ProfileType, UserType} from "../types/types";

const apiRequest = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": '6aa9dc35-6dc6-4f19-b0ef-aca7ffdb5bc7'
    }
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10,
}
type CommonResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return apiRequest.get<GetUsersResponseType>(`/users/?count=${pageSize}&page=${currentPage}`)
            .then(r => r.data);
    },
    follow(userId: number ){
        return apiRequest.post<CommonResponseType>(`/follow/${userId}`)
    },
    unFollow(userId: number ){return apiRequest.delete<CommonResponseType>(`/follow/${userId}`)},
    getProfile(userId: number ) {
        return profileAPI.getProfile(userId)
    }
}

type SetPhotosOfProfileResponseType = {
    data: PhotosOfProfileType
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export const profileAPI = {
    getProfile(userId: number ) {
        return apiRequest.get<ProfileType>(`/profile/${userId}`).then(r=>r.data)
    },
    getStatus(userId: number) {
        return apiRequest.get<string>(`/profile/status/${userId}`).then(r=>r.data)
    },
    updateStatus(status: string) {
        status = status || '';
        return apiRequest.put<CommonResponseType>(`/profile/status`, {status: status}).then(r=>r.data)
    },
    savePhoto(file: any) {
        let formData = new FormData();
        formData.append('image', file)
        return apiRequest.put<SetPhotosOfProfileResponseType>(`/profile/photo`, formData,{headers: {
            "Content-Type": 'multipart/form-data'
            }}).then(r=>r.data)
    },
    setProfile(profile: ProfileType) {
        return apiRequest.put<CommonResponseType>(`/profile`,profile).then(r=>r.data)
    },
}


type GetMeResponseType = {
    data: { id: number, email: string, login: string}
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LogInResponseType = {
    data: { userId: number,}
    resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
}
type LogOutResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export const authAPI = {
    getMe() {
        //data { id: num, email, login}
        return apiRequest.get<GetMeResponseType>("/auth/me").then(res => res.data)
    },
    logIn(email: string, password: string, rememberMe: boolean = false,captcha: null | string = null){
        return apiRequest
            .post<LogInResponseType>("/auth/login",{email, password, rememberMe,captcha }).then(res=>  res.data)
    },
    logOut(){
        return apiRequest
            .delete<LogOutResponseType>("/auth/login").then(res => res.data)
    },
}

type GetCaptchaUrlResponseType = {
    url: string
}
export const securityApi = {
    getCaptchaUrl(){
        return apiRequest
            .get<GetCaptchaUrlResponseType>("/security/get-captcha-url").then(res => res.data)

    },
}


