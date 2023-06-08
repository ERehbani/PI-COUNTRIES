// import Card from "../../components/card/card"
import Navbar from "../../components/navbar/navbar"
import CardList from '../../components/cardList/cardList'
import { useEffect } from "react"
import {getCountry} from '../../redux/actions'
import { useDispatch } from "react-redux"

const Home = () => {

    const dispatch = useDispatch()

useEffect(() => {
    dispatch(getCountry())
},[dispatch])

    return (
        <div>
            <h1>HOME</h1>
            <Navbar/>
            <CardList/>
        </div>
    )
}



export default Home