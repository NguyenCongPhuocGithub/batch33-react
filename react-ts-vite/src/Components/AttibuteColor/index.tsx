import styles from './AttributeColor.module.css'

type AttributeItemType = {
    label: string, 
    className?: string
}

function AttributeItem({label,className}: AttributeItemType){
    const classStyle = className && className !== '' ? `${styles.attr_item} ${className}` : styles.attr_item;
    return (
        <span className={classStyle}>{label}</span>
    )
}

function AttributeColor(){
    ///let activeClass = styles.attr_item + ' ' + styles.current;
    //let activeClass = `${styles.attr_item} ${styles.current}`;
    return (
        <div className={styles.attr_block}>
            <span className={styles.attr_name}>Màu Sắc</span>
            <AttributeItem className={styles.current} label='Đen' />
            <AttributeItem label='Hồng' />
            <AttributeItem label='Xanh' />
        </div>
    )
}

export default AttributeColor