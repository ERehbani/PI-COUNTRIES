import { GET_COUNTRY_BY_NAME, GET_COUNTRY, COUNTRY_DETAIL, CLEAN_DETAIL, FILTER_COUNTRY, COUNTRYS_CURRENT_PAGE, SET_PAGE, ORDER_COUNTRY_POB, ORDER_COUNTRY_AZ, UPDATE_FILTERED_COUNTRIES } from "./action-type";

const initialState = {
    countries: [],
    allCountries: [],
    detail: {},
    page: 1,
    countriesCurrentPage: []
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        
        case GET_COUNTRY:
            return {
                ...state,
                countries: payload,
                allCountries: payload
            }
        
            case COUNTRY_DETAIL:
            return {
                ...state,
                detail: payload
            }
        
            case CLEAN_DETAIL:
            return {
                ...state,
                detail:{}
            }
            
            case FILTER_COUNTRY: 
            if(payload === 'All') return{
                ...state,
                countries: state.allCountries
            }
            const countriesFilter = state.allCountries
            const filteredCountries = countriesFilter.filter((country) => country.continent === payload)
            return {
                ...state,
                countries: filteredCountries
            }
        
            case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: payload
            }
        
            case SET_PAGE:{
            return {
                ...state,
                page: payload
            }
        }
        
        case COUNTRYS_CURRENT_PAGE: {
            return {
                ...state,
                countriesCurrentPage: payload,
            }
        }

        case UPDATE_FILTERED_COUNTRIES:
            return {
                ...state,
                countries: payload,
            };

        case ORDER_COUNTRY_AZ :
            return {
                ...state,
                countries: payload === "A - Z"
                ? [...state.countries].sort((a, b) => a.name.localeCompare(b.name))
                : [...state.countries].sort((a, b) => b.name.localeCompare(a.name))
            }

        case ORDER_COUNTRY_POB:
            return {
                ...state,
                countries: payload === "Menor"
                ? [...state.countries].sort((a, b) => a.poblation - b.poblation)
                : [...state.countries].sort((a, b) => b.poblation - a.poblation)
            }






        default:
            return{...state}
    }
}






export default rootReducer