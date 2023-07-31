import styles from './Basic02.module.css';
import Label from '../Label';
import { PiCheckSquareBold } from 'react-icons/Pi';
import { BsShieldCheck} from 'react-icons/Bs';
import { TiArrowBackOutline} from 'react-icons/Ti';

// type Basic02Type = {
//     type ?: string
// }

function Basic02(){
    // let display = '';
    // if(type === 'inline'){
    //     display = `${styles.inline}`
    // } else if(type === 'block'){
    //     display = `${styles.block}`
    // }
    return(
        <div className={styles.flex}>
            <div>
                <Label icon = {<PiCheckSquareBold />}  type = 'bold' label = 'Bộ sản phẩm gồm:'/>
                <Label label = 'Hộp, sách hướng dẫn, cáp, cây lấy sim'/>
            </div>
            <div>
                <Label icon = {<BsShieldCheck />} type = 'bold' label = 'Bảo hành:'/>
                <Label label='Chính hãng 12 tháng'/>
            </div>
            <div>
                <Label type = 'bold' icon = {<TiArrowBackOutline />} label = 'Đổi trả:'/>
                <Label label='Hư gì đổi nấy 12 tháng'/>
            </div>    
        </div>
    )
}

export default Basic02;
