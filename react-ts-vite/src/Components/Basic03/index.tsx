import styles from './Basic03.module.css';
import React from 'react';

type Basic03Type = {
    label : string;
    icon ?: React.ReactNode;
    type ?: string
}

function Basic03({label, icon, type} : Basic03Type){

    let classBasic03 = `${styles.button}`;
    if(type && type === 'dark'){
        classBasic03 = `${styles.button} ${styles.button_dark}`
    }

    return(
        <button className={classBasic03}>{icon} {label}</button>
    )
}

export default Basic03