const axios = require("axios")
const URL = "https://rest-countries.up.railway.app/v3/all"



const getApiInfo = async() => {
    const { data } = await axios(`${URL}`)
    const countriesApiInfo = await data.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            image: country.flags[1],
            continent: country.region,
            capital: country.capital ? country.capital[0] : "capital not found",
            subregion: country.subregion,
            area: country.area,
            poblation: country.population
        }
    }) 
    return countriesApiInfo
}

const getCountryDb = async () => {
    const allCountries = await Country.findAll()
    return allCountries;
}

const getCountriesByName = async(name) => {
    const allCountries = await getApiInfo()
    if(name) {
        let countryFilter = allCountries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()))
        if(countryFilter.length){
            return countryFilter
        }
    }
    return allCountries
}

const getCountriesById = async(id) => {
    const allCountries = await getApiInfo()
    if(id) {
        const countryById = allCountries.filter(country => country.id === id.toUpperCase())
        if(countryById.length){
            return countryById
        }
    }
    return allCountries
}




module.exports = {
    getApiInfo,
    getCountriesByName,
    getCountryDb,
    getCountriesById
}