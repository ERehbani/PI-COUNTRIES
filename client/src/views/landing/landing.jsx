import { NavLink } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div class="lading-container">
      <div class="landing">
        <h1 class="title">PI COUNTRIES 🌎</h1>
        <NavLink to="/home">
          <button class="button">Países</button>
        </NavLink>
      </div>
      <p class="author">by Elian Rehbani ✓</p>
    </div>
  );
};

export default Landing;
