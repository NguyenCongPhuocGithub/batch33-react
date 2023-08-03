import styles from './VideoList.module.css';
import React from 'react';
// import { FaRegHeart } from 'react-icons/fa';
import {videos} from '../../data/videos'

type VideoItemType = {
    thumb: string,
    title: string,
    desc: string,
    icon: string
    // colorIcon ?: string
}

function VideoItem({ video }: {video : VideoItemType}) {
    const Icon = video.icon // Icon lúc này là component
    return (
        <li className={styles.video_item}>
            <div className={styles.thumb}>
                <img src={video.thumb} alt={video.title} />
            </div>
            <div className={styles.content}>
                <h3>{video.title}</h3>
                <p>{video.desc}</p>
            </div>
            <div className={styles.like}>
                {/* {`<${video.icon}/>`} */}
                <Icon/>
            </div>
        </li>
    )
}

const VideoList = () => {
    return (
        <ul className={styles.VideoList}>
            {
                videos.map((item) => {
                    return(
                        <VideoItem key = {`VideoList${item}`} video = {item}/>
                    ) 
                })
            }
            {/* <VideoItem thumb='./images/img-1.png' title='React:The Documentary' desc ='The origin story of React' icon = {<FaRegHeart/>} /> 
            <VideoItem thumb='./images/img-2.png' title='Rethinking Best Practices' desc ='Pete Hunt (2013)' icon = {<FaRegHeart/>} />
            <VideoItem thumb='./images/img-3.png' title='Introducing React Native' desc ='Tom Occhino(2015)' icon = {<FaRegHeart/>} /> */}
        </ul>
    )
}

export default VideoList

