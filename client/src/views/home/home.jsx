// import Card from "../../components/card/card"

import CardList from '../../components/cardList/cardList'
import { useEffect, useState } from "react"
import {getCountry, getCountryByName } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux"
import Searchbar from "../Searchbar/searchbar"
import Paginado from "../Paginado/paginado"
import Filter from "../Filters/filters"
import Order from "../Order/order"
import Navbar from '../navbar/navbar'


const Home = () => {

    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.countries)
    const[searchString, setSearchString] = useState("")


    const handleChange = (event) => {
        setSearchString(event.target.value.toLowerCase())
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getCountryByName(searchString))
    }

useEffect(() => {
    if(!allCountries.length){
        dispatch(getCountry())
    }
},[dispatch, allCountries])

    return (
        <div>
            <h1>HOME</h1>
            <Searchbar  handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Filter/>   <Order/>
            <CardList allCountries={allCountries}/>
            <Paginado/>
        </div>
    )
}



export default Home