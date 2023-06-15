import { useDispatch, useSelector } from "react-redux"
import { filterCountry, setPage, updateFilteredCountries } from "../../redux/actions"
import { useState } from "react"


export const Filter = () => {
    const dispatch = useDispatch()
    const countryContinent = useSelector(state => state.allCountries)
    const [ filter,  setFilter ] = useState('')
    


    let allCountries = []
    countryContinent.forEach(country => {
        allCountries.push(country.continent)
    })
    const filtro = allCountries.filter((value, index, array) => {
        return array.indexOf(value) === index
    })
    console.log(filtro)

    const handleFilter = (event) => {
    const filteredCountries = countryContinent.filter((country) => country.continent === event.target.value);
    dispatch(updateFilteredCountries(filteredCountries));
    dispatch(setPage(1));
};

    

    return (
        <div>
            <b>Filtro </b>
            <select name="continent" id="" defaultValue='' onChange={handleFilter}>
                <option value="continent">Continente</option>
                {filtro.map((cont, index) => (
                    <option  value={cont} key={index}>{cont}</option>
                ))}
            </select>
        </div>
        )
    
}


export default Filter