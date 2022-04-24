export type PostItem = {
    id: number
    message: string
    likesCount: number
}
export type ContactsOfProfileType = {
    [key: string] : string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosOfProfileType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsOfProfileType
    photos: PhotosOfProfileType
    aboutMe: string

}

export type UserType = {
    name: string
    id: number
    photos: PhotosOfProfileType
    status: string
    followed: boolean
}


export type DialogsItemType = {
    id: number
    name: string
}
export type MessagesItemType = {
    id: number
    message: string
}
