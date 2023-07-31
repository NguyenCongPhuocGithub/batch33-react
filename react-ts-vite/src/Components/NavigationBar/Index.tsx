import styles from './NavigationBar.module.css';
import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/Md';

type NaviItemType = {
    label : string,
    icon ?: React.ReactNode,
}

function NaviItem({label, icon}:NaviItemType) {
    return (
        <li className={styles.li}><a href="">{label} {icon}</a></li>
    )
}
type NavigationBarType = {
    background ?: string
}

function NavigationBar({background = '#f80'} : NavigationBarType){
    return (
        <ul className = {styles.ul} style ={{ background :  background }}>
            <NaviItem label='Home' />
            <NaviItem icon ={<MdOutlineKeyboardArrowDown/>} label='Blog' />
            <NaviItem label='Categogy' />
            <NaviItem label='Product' />
            <NaviItem label='Login' />
        </ul>
    )
}

export default NavigationBar