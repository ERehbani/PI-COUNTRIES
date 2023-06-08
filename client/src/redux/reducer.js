import { GET_COUNTRY } from "./action-type";

const initialState = {
    countries: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
            
    
        default:
            return{...state}
    }
}






export default rootReducer