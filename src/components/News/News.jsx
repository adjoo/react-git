import React from 'react';
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";

const News = (props) => {
    return <div>
        <NewsItem dataIndex={11} dataHeader={'news 1'} dataText={'text of the news 1'}/>
        <NewsItem dataIndex={13} dataHeader={'news 2'} dataText={'text of the news 2'}/>
        <NewsItem dataIndex={15} dataHeader={'news 3'} dataText={'text of the news 3'}/>
    </div>
}

export default News