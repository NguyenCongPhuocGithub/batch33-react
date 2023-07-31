import styles from './Product.module.css'

type ProductType = {
    thumb : string,
    title ?: string,
    label : string,
    price : number,
    price_sale ?: number,
    type ?: string,
    sale ?: string
}

function Product({thumb, title, label, price, price_sale, type, sale} : ProductType) {
    let class_sale = ''
    if(type){
        if(type === 'sale'){
            class_sale =  `${styles.show}`
        }
    }else{
        class_sale = `${styles.hidden}`
    }
    return(
        <div className = {styles.flex}>
             <div className={styles.thumb}>
                <img src={thumb} alt={title} />
                <div className ={class_sale}>{sale}</div>
            </div>
            <div><strong>{label}</strong></div>
            <div style = {{color:'red'}}>{price} <del style = {{color: 'rgb(199, 193, 193)', marginLeft : '10px'}}>{price_sale}</del> </div>
        </div>
    )
}

export default Product;