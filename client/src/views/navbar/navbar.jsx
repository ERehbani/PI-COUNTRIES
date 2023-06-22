import "./navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <div>
        <a href="/">
          <img class="navbarLogo" src="NavbarLogo.svg" alt="" />
        </a>
      </div>
      <div className="links">
        <NavLink to="/" className="navlink">
          Landing
        </NavLink>
        <NavLink to="/home" className="navlink">
          Home
        </NavLink>
        <NavLink to="/create" className="navlink">
          <button className="buttonToForm">Crear una actividad</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
