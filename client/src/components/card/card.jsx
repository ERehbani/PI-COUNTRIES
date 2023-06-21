import { NavLink } from 'react-router-dom'
import styles from './card.module.css'

const Card = (props) => {

    const getClassByContent = (content) => {
        switch (content) {
            case "Africa":
                return styles.Africa
            case "Americas":
                return styles.America
            case "Asia":
                return styles.Asia
            case "Antarctic":
                return styles.Antarctic
            case "Europe":
                return styles.Europe
            case "Oceania":
                return styles.Oceania
        
            default:
                break;
        }
    }

    return (
        <div className={styles.card}>

            <div className={styles.cardContainer}>

                <div className={styles.card1}>
                <div className={styles.name}>
                    {props.name}
                </div>
                    
                    <div className={styles.id}>
                        <p>{props.id}</p>
                    </div>
                </div>

            
                <img src={props.image} alt={props.name} />

                <div className={styles.continent}>
                    <p className={getClassByContent(props.continent)}>{props.continent}</p>
                </div>
                
                <div className={styles.detailLink}>
                <NavLink to={`/detail/${props.id}`} className={styles.navLink}><button className={styles.buttonToDetail}>Ver mas →</button></NavLink>
                </div>
            </div>
        </div>
    )
}


export default Card