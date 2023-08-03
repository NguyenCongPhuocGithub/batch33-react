import styles from './ListNotable.module.css';
import { notables } from '../../data/notables';

// type InfoItem = {
//     title : string,
//     desc : string
// }

// function Info({title, desc}: InfoItem){
//     return(
//         <li className={styles.liInfo}>
//             <h4>{title}</h4>
//             <div>{desc}</div>
//         </li>
//     )
// }

type NotableType = {
    name: string,
    avatarID: string,
    size: string,
    Profession?: string,
    Awards?: string,
    Discovered?: string,
}

function NotableItem({ notable }: { notable: NotableType }) {
    const link = `https://i.imgur.com/${notable.avatarID}${notable.size}.jpg`;
    return (
        <li className={styles.block}>
            <h2>{notable.name}</h2>
            <div className={styles.thumb}>
                <img src={link} alt={notable.name} />
            </div>
            <div>
                <li>
                    <div className={styles.content}>
                        <strong>Profession:</strong>
                        <span>{notable.Profession}</span>
                    </div>
                </li>
                <li>
                    <div className={styles.content}>
                        <strong>Awards:</strong>
                        <span>{notable.Awards}</span>
                    </div>
                </li>
                <li>
                    <div className={styles.content}>
                        <strong>Discovered:</strong>
                        <span>{notable.Discovered}</span>
                    </div>
                </li>
            </div>
        </li>
    )
}

function NotableList() {
    return (
        <ul className={styles.ul}>
            {
                notables.map(item => {
                    return (
                        <NotableItem key={`NotableList${item}`} notable = {item}/>
                    )
                }
                )
            }
            {/* <NotableItem name='Maria Sklodowska-Curie' avatarID='szV5sdG' size='s'
                Profession='physicist and chemist' Awards='4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'
                Discovered='polonium (element)'
            />
            <NotableItem name='Katsuko Saruhashi' avatarID='YfeOqp2' size='s'
                Profession='geochemist' Awards='2 (Miyake Prize for geochemistry, Tanaka Prize)'
                Discovered='a method for measuring carbon dioxide in seawater'
            /> */}
        </ul>
    )
}
  

export default NotableList
