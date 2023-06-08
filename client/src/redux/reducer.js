import { GET_COUNTRY, COUNTRY_DETAIL } from "./action-type";

const initialState = {
    countries: [],
    detail: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
        case COUNTRY_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
    
        default:
            return{...state}
    }
}






export default rootReducer