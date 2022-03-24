import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {



    let postsElements = props.posts.map(el => (<Post message={el.message} likesCount={el.likesCount}/>))
    let newPostElement = React.createRef();
    let newPostText = props.newPostText;

    let onAddPost = ()=> {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return <div>
        <h5 className={style.title}>My Posts</h5>

        <div className={style.area}>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={newPostText}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>

        </div>

        {postsElements}

    </div>
}
export default MyPosts;
