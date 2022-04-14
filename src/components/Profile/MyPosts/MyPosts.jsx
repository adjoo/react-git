import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPostFormRedux from "./NewPostForm";

const MyPosts = React.memo( (props) => {
    let postsElements = props.posts.map(el => (<Post message={el.message} likesCount={el.likesCount}/>))

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div>
        <h5 className={style.title}>My Posts</h5>

        <div className={style.area}>
            <NewPostFormRedux onSubmit={onAddPost} new/>
        </div>

        {postsElements}

    </div>
})

export default MyPosts;
