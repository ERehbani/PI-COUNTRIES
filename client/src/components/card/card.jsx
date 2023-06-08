import { NavLink } from 'react-router-dom'
import styles from './card.module.css'

const Card = (props) => {
    return (
        <div className={styles.card}>

                <img src={props.image} alt={props.name} />

            <div className={styles.cardContainer}>

                <div className={styles.name}>
                    {props.name}
                </div>
                    
                    <div className={styles.id}>
                        <p>{props.id}</p>
                    </div>

            </div>
                <div className={styles.continent}>
                <NavLink to={`/detail/${props.id}`} className={styles.navLink}><button className={styles.button}>Ver mas →</button></NavLink>
                    <p>{props.continent}</p>
                </div>
                

        </div>
    )
}


export default Card