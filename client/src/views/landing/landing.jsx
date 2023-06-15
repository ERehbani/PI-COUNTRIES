import { NavLink } from "react-router-dom"
import "./landing.css"



const Landing = () => {
    return (
        <div class="landing">
            <h1>PI COUNTRIES</h1>
        <NavLink to="/home"><button class="button">Países</button></NavLink>
        </div>
    )
}


export default Landing