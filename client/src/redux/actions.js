import { GET_COUNTRY, COUNTRY_DETAIL } from "./action-type";
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

export const countryDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = axios.get(`http://localhost:3001/countries/${id}`)
            if (!data){
                throw new Error('The country with that id has not been found')
            }
            dispatch({
                type: COUNTRY_DETAIL,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}





