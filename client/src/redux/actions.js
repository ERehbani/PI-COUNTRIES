import { GET_COUNTRY } from "./action-type";
import axios from 'axios'

export const getCountry = () => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get('http://localhost:3001/countries')
            dispatch({ type: GET_COUNTRY, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}





