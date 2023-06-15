const axios = require("axios")
const {Country, Activity} = require("../db")
const URL = "https://rest-countries.up.railway.app/v3/all"


const getApiInfo = async(name) => {
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

    const saveInDb = async () => {
        countriesApiInfo.map(country => {
            Country.findOrCreate({
                where:{
                    id: country.id,
                    name: country.name
                },
                defaults: {
                    image: country.image,
                    continent: country.continent,
                    capital: country.capital,
                    subregion: country.subregion,
                    area: country.area,
                    poblation: country.poblation
                }
            })
        })
    }
    saveInDb()
    return countriesApiInfo
}

const getCountryDb = async () => {
    await getApiInfo()
    const allCountries = await Country.findAll({
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: []
            }
        }
    })
    return allCountries;
}

const getCountriesByName = async(name) => {
    const allCountries = await getCountryDb()
    if(name) {
        let countryFilter = allCountries.filter(country =>
            country.name.toLowerCase().includes(name.toLowerCase()))
        if(countryFilter.length){
            return countryFilter
        }   
        throw new Error("No se encontro usuario con ese nombre")
    }
        else {
            return allCountries
        }
    }


const getCountriesById = async(id) => {
    const allCountries = await getCountryDb()
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