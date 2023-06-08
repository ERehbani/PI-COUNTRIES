import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.name} />

            <div>
                <NavLink to={`/detail/${props.id}`}>{props.name}</NavLink>
            </div>
                <div>
                    <p>{props.id}</p>
                </div>
            <div>
                <p>{props.continent}</p>
            </div>

        </div>
    )
}


export default Card