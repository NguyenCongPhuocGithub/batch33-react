import styles from './VideoList.module.css';
import React from  'react';
import { FaRegHeart } from 'react-icons/fa';

type VideoItemType = {
    thumb : string, 
    title : string, 
    desc : string,
    icon : React.ReactNode
    // colorIcon ?: string
}

function VideoItem({thumb, title, desc, icon } : VideoItemType){
    return (
        <li className={styles.video_item}>
            <div className={styles.thumb}>
                <img src={thumb} alt={title} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{desc}</p>  
            </div>
            <div className={styles.like}>
                {icon}
            </div>
        </li>
    )
}

function VideoList(){
    return(
        <ul className={styles.VideoList}>
            <VideoItem thumb='./images/img-1.png' title='React:The Documentary' desc ='The origin story of React' icon = {<FaRegHeart/>} /> 
            <VideoItem thumb='./images/img-2.png' title='Rethinking Best Practices' desc ='Pete Hunt (2013)' icon = {<FaRegHeart/>} />
            <VideoItem thumb='./images/img-3.png' title='Introducing React Native' desc ='Tom Occhino(2015)' icon = {<FaRegHeart/>} />
        </ul>
    )
}

export default VideoList

