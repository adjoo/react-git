export type PostItem = {
    id: number
    message: string
    likesCount: number
}
export type ContactsOfProfileType = {
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
}

export type UserType = {
    name: string
    id: number
    photos: PhotosOfProfileType
    status: string
    followed: boolean
}

