import React from 'react';
import s from './NewsItem.module.css'

const NewsItem = (props) => {

    return <div className={s.item} id={props.dataIndex}>
        <strong>{props.dataHeader}</strong>
        <p>{props.dataText}</p>
    </div>
}

export default NewsItem