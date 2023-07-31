import styles from './Label.module.css';
import React from 'react';

type LabelType = {
    icon ?: React.ReactNode,
    type?: string,
    label: string
};

function Label({icon, type, label} : LabelType){
    let classLalel = '';
    if(type === 'border'){
        classLalel = `${styles.border}`;
    }else if (type === 'bold'){
        classLalel = `${styles.bold}`;
    }

    // (type === 'border') ? classLable = `${styles.border}` : classLable = ``;
    // (type === 'bold') ? classLable = `${styles.bold}` : classLable = ``;
    return (
        <div className = {`${styles.inline}`}>
            <div className = {classLalel}>{icon} {label}</div>
        </div> 
    )
}

export default Label;