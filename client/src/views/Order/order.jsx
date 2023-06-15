import { orderCountryAZ, orderCountryPoblation } from "../../redux/actions"
import { useDispatch } from "react-redux"

const Order = () => {
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCountryAZ(event.target.value))
    }

    const handleOrderPob = (event) => {
        dispatch(orderCountryPoblation(event.target.value))
    }
    
    return(
        <div>
            <b>Ordenamiento </b>
            <select onChange={handleOrder}>
                <option value="">Alfabetico</option>
                <option value="A - Z">A - Z</option>
                <option value="Z - A">Z - A</option>
            </select>
            <select onChange={handleOrderPob}>
                <option value="">Población</option>
                <option value="Mayor">Mayor Poblacion</option>
                <option value="Menor">Menor poblacion</option>
            </select>
        </div>
    )
}


export default Order