import styles from './ListNotable.module.css';
import { notables } from '../../data/notables'
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
                        <h4>Profession:</h4>
                        <div>{notable.Profession}</div>
                    </div>
                </li>
                <li>
                    <div className={styles.content}>
                        <h4>Awards:</h4>
                        <div>{notable.Awards}</div>
                    </div>
                </li>
                <li>
                    <div className={styles.content}>
                        <h4>Discovered:</h4>
                        <div>{notable.Discovered}</div>
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
                })
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