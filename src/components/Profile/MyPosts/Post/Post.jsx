import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <div className={style.item__picture}><img
                src="https://get.wallhere.com/photo/1500x900-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635343.jpg"
                alt=""/></div> 
            <div className={style.item__content}>
                <p>{props.message}</p>
                <span>likes: {props.likesCount}</span></div>


        </div>)
}


export default Post;
