import profileReducer, {addPost, deletePost} from "./profile-reducer";
import React from 'react'

it('length of postsData should be incremented', () => {
    //1.test start data
    let action = addPost("add new post test")
    const state = {
        postsData: [
            {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
            {id: 2, message: 'Its me second post', likesCount: 11,},
            {id: 3, message: 'This is last post', likesCount: 2,},
        ],
    }
    //2. action
    let newState = profileReducer(state,action)

    //3.expectation
    expect(newState.postsData.length).toBe(4);
})
it('message of new element postsData should be "add new post test"', () => {
    //1.test start data
    let action = addPost("add new post test")
    const state = {
        postsData: [
            {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
            {id: 2, message: 'Its me second post', likesCount: 11,},
            {id: 3, message: 'This is last post', likesCount: 2,},
        ],
    }
    //2. action
    let newState = profileReducer(state,action)

    //3.expectation
    expect(newState.postsData[3].message).toBe("add new post test");
})

it('after deleting length of postData should be decremented', () => {
    //1.test start data
    let action = deletePost(1)
    const state = {
        postsData: [
            {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
            {id: 2, message: 'Its me second post', likesCount: 11,},
            {id: 3, message: 'This is last post', likesCount: 2,},
        ],
    }
    //2. action
    let newState = profileReducer(state,action)

    //3.expectation
    expect(newState.postsData.length).toBe(2);
})
it('after deleting length of postData should not be decremented if id is incorrect', () => {
    //1.test start data
    let action = deletePost(100)
    const state = {
        postsData: [
            {id: 1, message: 'Hi? this is my first post', likesCount: 24,},
            {id: 2, message: 'Its me second post', likesCount: 11,},
            {id: 3, message: 'This is last post', likesCount: 2,},
        ],
    }
    //2. action
    let newState = profileReducer(state,action)

    //3.expectation
    expect(newState.postsData.length).toBe(3);
})